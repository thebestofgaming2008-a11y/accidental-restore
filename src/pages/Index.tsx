import Layout from '@/components/Layout';
import HeroBanner from '@/components/HeroBanner';
import CategorySection from '@/components/CategorySection';
import FeaturedProducts from '@/components/FeaturedProducts';
import BundleDeals from '@/components/BundleDeals';
import { Helmet } from 'react-helmet-async';
import { Truck, Shield, Headphones, CreditCard } from 'lucide-react';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Maktabah Abu Hurayrah - Islamic Essentials for Daily Life</title>
        <meta name="description" content="Shop authentic Islamic books, traditional clothing, pure honey, saffron and more. Your trusted source for Islamic essentials following the way of the Salaf." />
      </Helmet>
      <Layout>
        <HeroBanner />
        <CategorySection />
        <FeaturedProducts />
        <BundleDeals />
        
        {/* Why Choose Us Section */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="font-philosopher text-2xl md:text-3xl font-bold text-center mb-10">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              <div className="bg-card rounded-xl p-5 md:p-6 text-center border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-philosopher font-bold text-sm md:text-base mb-2">Authentic Sources</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  All books from reliable publishers with authentic translations
                </p>
              </div>
              <div className="bg-card rounded-xl p-5 md:p-6 text-center border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-philosopher font-bold text-sm md:text-base mb-2">Free Shipping</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Free shipping on orders above ₹2000 with careful packaging
                </p>
              </div>
              <div className="bg-card rounded-xl p-5 md:p-6 text-center border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-philosopher font-bold text-sm md:text-base mb-2">Secure Payment</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Multiple payment options with secure checkout
                </p>
              </div>
              <div className="bg-card rounded-xl p-5 md:p-6 text-center border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-philosopher font-bold text-sm md:text-base mb-2">Customer Support</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Quick response on WhatsApp for all your queries
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
