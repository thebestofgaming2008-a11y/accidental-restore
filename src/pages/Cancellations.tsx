import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';

const Cancellations = () => {
  return (
    <>
      <Helmet>
        <title>Cancellations & Returns - Maktabah Abu Hurayrah</title>
        <meta name="description" content="Learn about our cancellation and return policies." />
      </Helmet>
      <Layout>
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-philosopher text-3xl md:text-4xl font-bold text-center mb-8">
              Cancellations & Returns
            </h1>

            <div className="prose prose-gray max-w-none">
              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Order Cancellation</h2>
              <p className="text-muted-foreground">
                Orders can be cancelled within 24 hours of placing the order, provided the order has not 
                been shipped. To cancel your order, please contact us immediately via WhatsApp or email.
              </p>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Returns Policy</h2>
              <p className="text-muted-foreground">
                We accept returns within 7 days of delivery under the following conditions:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>The product is unused and in its original condition</li>
                <li>The product is in its original packaging</li>
                <li>Books must not have any marks, tears, or damage</li>
                <li>Clothing items must have original tags attached</li>
              </ul>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Non-Returnable Items</h2>
              <p className="text-muted-foreground">
                The following items cannot be returned:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Honey and food products (once opened)</li>
                <li>Saffron and attars</li>
                <li>Damaged items due to mishandling by the customer</li>
                <li>Items purchased during sale or with discounts</li>
              </ul>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Damaged or Defective Products</h2>
              <p className="text-muted-foreground">
                If you receive a damaged or defective product, please contact us within 48 hours of 
                delivery with photos of the damage. We will arrange for a replacement or full refund.
              </p>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Return Process</h2>
              <ol className="space-y-2 text-muted-foreground list-decimal pl-4">
                <li>Contact us via WhatsApp or email to initiate a return request</li>
                <li>Pack the item securely in its original packaging</li>
                <li>Ship the item to our address (return shipping costs are borne by the customer)</li>
                <li>Once received and inspected, we will process your refund within 5-7 business days</li>
              </ol>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Refunds</h2>
              <p className="text-muted-foreground">
                Refunds will be processed to the original payment method within 5-7 business days after 
                we receive and inspect the returned item. Please note that it may take additional time 
                for the refund to reflect in your account depending on your bank.
              </p>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                For any questions about cancellations or returns, please contact us at 
                abuhurayrahessentials@gmail.com or via WhatsApp at +91 84919 43437.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cancellations;