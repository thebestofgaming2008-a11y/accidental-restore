import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatPrice } from '@/lib/currency';
import { toast } from 'sonner';
import { getFirstImage } from '@/utils/imageLoader';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const imageUrl = getFirstImage(product.category, product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border flex flex-col"
    >
      <div className="relative aspect-[4/5] bg-muted overflow-hidden">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {product.badge && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground font-semibold text-xs">
            {product.badge}
          </Badge>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button onClick={handleAddToCart} size="sm" className="w-full gap-2 font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
            <ShoppingCart size={16} />
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-philosopher font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 min-h-[2.75rem] text-sm md:text-base">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground mt-1">{product.category}</p>
        {product.rating > 0 && (
          <div className="flex items-center gap-1 mt-2">
            <Star size={12} className="fill-yellow-500 text-yellow-500" />
            <span className="text-xs text-muted-foreground">{product.rating} ({product.reviews})</span>
          </div>
        )}
        <div className="mt-auto pt-3">
          <p className="font-bold text-base md:text-lg text-foreground">{formatPrice(product.price)}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;