import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Star } from 'lucide-react';

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-primary-foreground rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-primary-foreground rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-primary-foreground rotate-45 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Authentic Islamic Resources</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-philosopher text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Maktabah Abu Hurayrah
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Your trusted source for authentic Islamic books, traditional clothing, 
            and pure natural products. Following the way of the Salaf.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="gap-2 font-philosopher hover:scale-105 transition-transform">
              <Link to="/shop">
                <BookOpen size={20} />
                Browse Collection
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-philosopher hover:scale-105 transition-transform">
              <Link to="/shop?category=Combos">
                View Combos
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold font-philosopher">45+</p>
              <p className="text-sm opacity-80">Products</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold font-philosopher">100%</p>
              <p className="text-sm opacity-80">Authentic</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold font-philosopher">Fast</p>
              <p className="text-sm opacity-80">Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;