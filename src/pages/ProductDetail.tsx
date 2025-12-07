import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { getProductById, getProductsByCategory } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import { ShoppingCart, ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  
  const product = id ? getProductById(id) : undefined;
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <>
      <Helmet>
        <title>{product.name} - Maktabah Abu Hurayrah</title>
        <meta name="description" content={product.description} />
      </Helmet>
      <Layout>
        <div className="container mx-auto px-4 py-8">
          {/* Back Link */}
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft size={16} />
            Back to Shop
          </Link>

          {/* Product Detail */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
              <BookOpen className="w-32 h-32 text-muted-foreground/30" />
            </div>

            {/* Info */}
            <div className="space-y-6">
              {product.badge && (
                <Badge className="bg-accent text-accent-foreground">
                  {product.badge}
                </Badge>
              )}
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                <h1 className="font-philosopher text-3xl md:text-4xl font-bold">
                  {product.name}
                </h1>
              </div>

              <p className="text-4xl font-bold">
                ₹{product.price.toLocaleString('en-IN')}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>In Stock & Ready to Ship</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Free shipping on orders above ₹2000</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Authentic & Original</span>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4">
                <Button onClick={handleAddToCart} size="lg" className="flex-1 gap-2">
                  <ShoppingCart size={20} />
                  Add to Cart
                </Button>
              </div>

              {/* Contact Note */}
              <p className="text-sm text-muted-foreground bg-muted p-4 rounded-lg">
                For bulk orders or inquiries, please{' '}
                <Link to="/contact" className="text-primary hover:underline">
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-16">
              <h2 className="font-philosopher text-2xl font-bold mb-6">
                Related Products
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}
        </div>
      </Layout>
    </>
  );
};

export default ProductDetail;
