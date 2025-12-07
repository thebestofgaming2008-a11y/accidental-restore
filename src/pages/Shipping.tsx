import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { Package, Truck, Clock, Globe } from 'lucide-react';

const Shipping = () => {
  return (
    <>
      <Helmet>
        <title>Shipping Policy - Maktabah Abu Hurayrah</title>
        <meta name="description" content="Learn about our shipping policies, delivery times, and shipping charges." />
      </Helmet>
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-philosopher text-3xl md:text-4xl font-bold text-center mb-8">
              Shipping Policy
            </h1>

            <div className="prose prose-gray max-w-none">
              {/* Shipping Highlights */}
              <div className="grid md:grid-cols-2 gap-4 mb-8 not-prose">
                <div className="bg-card rounded-lg p-6 border border-border">
                  <Package className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-philosopher font-bold mb-2">Free Shipping</h3>
                  <p className="text-sm text-muted-foreground">On all orders above ₹2000 within India</p>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border">
                  <Truck className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-philosopher font-bold mb-2">Standard Delivery</h3>
                  <p className="text-sm text-muted-foreground">5-7 business days across India</p>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border">
                  <Clock className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-philosopher font-bold mb-2">Processing Time</h3>
                  <p className="text-sm text-muted-foreground">Orders processed within 1-2 business days</p>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border">
                  <Globe className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-philosopher font-bold mb-2">International Shipping</h3>
                  <p className="text-sm text-muted-foreground">Available to select countries</p>
                </div>
              </div>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Domestic Shipping (India)</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Orders below ₹2000: ₹100 flat shipping charge</li>
                <li>Orders above ₹2000: FREE shipping</li>
                <li>Delivery time: 5-7 business days for most locations</li>
                <li>Remote areas may take 7-10 business days</li>
              </ul>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">International Shipping</h2>
              <p className="text-muted-foreground">
                We ship internationally to select countries. International shipping charges are calculated 
                based on the destination country and package weight. Please contact us for international 
                shipping quotes.
              </p>
              <div className="bg-notice/10 text-foreground p-4 rounded-lg mt-4">
                <strong>Important:</strong> International orders may be subject to customs duties, taxes, 
                and import fees. These charges are the responsibility of the recipient and are not included 
                in our shipping charges.
              </div>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Order Tracking</h2>
              <p className="text-muted-foreground">
                Once your order is shipped, you will receive a tracking number via WhatsApp and email. 
                You can use this number to track your package on the courier's website.
              </p>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Packaging</h2>
              <p className="text-muted-foreground">
                All orders are carefully packed to ensure safe delivery. Books are wrapped in protective 
                material, and fragile items like honey jars are securely cushioned.
              </p>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about shipping, please contact us at contact@maktabahabuhurayrah.com 
                or via WhatsApp at +91 98765 43210.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Shipping;
