import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';

const HeroBanner = () => {
  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section className="relative overflow-hidden">
      {/* Enhanced background with gradient and texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/8" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      {/* Animated floating orbs */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-36 h-36 bg-accent/15 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-primary/5 rounded-full blur-2xl animate-pulse-slow" />
      
      <div className="container relative mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
            <Sparkles size={14} className="animate-sparkle" />
            <span>Authentic Islamic Essentials</span>
          </div>
          <h1 className="font-philosopher text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight animate-fade-in-up animation-delay-100">
            Your Source for <span className="text-primary relative">
              Islamic Knowledge
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-primary/20 rounded-full" />
            </span> & Essentials
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            Authentic books on Aqeedah, Tafsir, Hadith & more. Traditional clothing, pure honey, saffron, and daily essentials.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up animation-delay-300">
            <Button asChild size="lg" className="font-philosopher text-base gap-2 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Link to="/shop" onClick={handleClick}><BookOpen size={18} />Browse Collection</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-philosopher text-base gap-2 hover:bg-muted hover:scale-105 transition-all duration-300">
              <Link to="/shop?category=Books" onClick={handleClick}>Explore Books<ArrowRight size={18} /></Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-2 group">
              <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-125 transition-transform" />
              <span>Authentic Translations</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-125 transition-transform" />
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-125 transition-transform" />
              <span>India-wide Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;