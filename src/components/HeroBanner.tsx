import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';

const HeroBanner = () => {
  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Sparkles size={14} />
            <span>Authentic Islamic Essentials</span>
          </div>
          <h1 className="font-philosopher text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            Your Source for <span className="text-primary">Islamic Knowledge</span> & Essentials
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
            Authentic books on Aqeedah, Tafsir, Hadith & more. Traditional clothing, pure honey, saffron, and daily essentials.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="font-philosopher text-base gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/shop" onClick={handleClick}><BookOpen size={18} />Browse Collection</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-philosopher text-base gap-2 hover:bg-muted">
              <Link to="/shop?category=Books" onClick={handleClick}>Explore Books<ArrowRight size={18} /></Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full" /><span>Authentic Translations</span></div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full" /><span>Secure Payments</span></div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full" /><span>India-wide Shipping</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;