import { Link } from 'react-router-dom';
import { Package, ArrowRight, Gift, Star } from 'lucide-react';
import { getProductsByCategory } from '@/data/products';
import { formatPrice } from '@/lib/currency';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const BundleDeals = () => {
  const bundles = getProductsByCategory('Combos').slice(0, 4);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent, product: typeof bundles[0]) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  // Featured bundle - first one or create a special one
  const featuredBundle = bundles[0];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 to-accent/10 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/20 rounded-lg">
              <Gift className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h2 className="font-philosopher text-2xl md:text-3xl font-bold text-foreground">
                Bundle Deals
              </h2>
              <p className="text-muted-foreground text-sm">
                Save more with our curated bundles
              </p>
            </div>
          </div>
          <Button asChild variant="default" className="hidden sm:flex gap-2 font-philosopher bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/shop?category=Combos">
              View Combos <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        {/* Featured Large Bundle */}
        {featuredBundle && (
          <div className="mb-8">
            <Link
              to={`/product/${featuredBundle.id}`}
              className="group block bg-card rounded-2xl overflow-hidden border-2 border-primary/20 hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 aspect-square md:aspect-auto bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center p-8">
                  <div className="relative">
                    <Package className="w-24 h-24 text-primary/60 group-hover:scale-110 transition-transform duration-300" />
                    <Star className="absolute -top-2 -right-2 w-8 h-8 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
                <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-3 bg-primary text-primary-foreground">
                    ⭐ Featured Deal
                  </Badge>
                  <h3 className="font-philosopher text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                    {featuredBundle.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-lg">
                    {featuredBundle.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-2xl text-foreground">
                      {formatPrice(featuredBundle.price)}
                    </span>
                    <Button
                      size="lg"
                      onClick={(e) => handleAddToCart(e, featuredBundle)}
                      className="font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Other Bundles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {bundles.slice(1).map((bundle) => (
            <Link
              key={bundle.id}
              to={`/product/${bundle.id}`}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[16/10] bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
                <Package className="w-12 h-12 text-primary/40 group-hover:scale-110 transition-transform duration-300" />
                {bundle.badge && (
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground font-semibold">
                    {bundle.badge}
                  </Badge>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-philosopher font-bold text-foreground group-hover:text-primary transition-colors">
                  {bundle.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {bundle.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-bold text-lg text-foreground">
                    {formatPrice(bundle.price)}
                  </span>
                  <Button
                    size="sm"
                    onClick={(e) => handleAddToCart(e, bundle)}
                    className="font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button asChild className="font-philosopher bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/shop?category=Combos">
              View All Bundles <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BundleDeals;
