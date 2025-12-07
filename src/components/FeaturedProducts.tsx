import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts = () => {
  // Get products with badges (featured items)
  const featuredProducts = products.filter(p => p.badge).slice(0, 8);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-philosopher text-2xl md:text-3xl font-bold">
          Featured Products
        </h2>
        <Button asChild variant="ghost" className="gap-2">
          <Link to="/shop">
            View All
            <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
