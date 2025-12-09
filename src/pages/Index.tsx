import Layout from '@/components/Layout';
import HeroBanner from '@/components/HeroBanner';
import ReviewsCarousel from '@/components/ReviewsCarousel';
import CategorySection from '@/components/CategorySection';
import FeaturedProducts from '@/components/FeaturedProducts';
import BundleDeals from '@/components/BundleDeals';
import { Helmet } from 'react-helmet-async';
import { Shield, Headphones, CreditCard, Package } from 'lucide-react';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Maktabah Abu Hurayrah - Islamic Essentials for Daily Life</title>
        <meta name="description" content="Shop authentic Islamic books, traditional clothing, pure honey, saffron and more. Your trusted source for Islamic essentials following the way of the Salaf." />
      </Helmet>
      <Layout>
        <HeroBanner />
        {/* Reviews carousel directly below hero/nav */}
        <ReviewsCarousel />
        <CategorySection />
        <FeaturedProducts />
        <BundleDeals />
        
        {/* Why Choose Us Section */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="font-philosopher text-2xl md:text-3xl font-bold text-center mb-10 animate-fade-in-up">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              {[
                { icon: Shield, title: 'Authentic Sources', desc: 'All books from reliable publishers with authentic translations' },
                { icon: Package, title: 'Careful Packaging', desc: 'All items securely packed for safe delivery' },
                { icon: CreditCard, title: 'Secure Payment', desc: 'Multiple payment options with secure checkout' },
                { icon: Headphones, title: 'Customer Support', desc: 'Quick response on WhatsApp for all your queries' },
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className="bg-card rounded-xl p-5 md:p-6 text-center border border-border hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-philosopher font-bold text-sm md:text-base mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;