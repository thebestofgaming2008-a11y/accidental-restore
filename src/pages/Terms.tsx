import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Maktabah Abu Hurayrah</title>
        <meta name="description" content="Read our terms of service and conditions for using our website." />
      </Helmet>
      <Layout>
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-philosopher text-3xl md:text-4xl font-bold text-center mb-8">
              Terms of Service
            </h1>

            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using the Maktabah Abu Hurayrah website, you agree to be bound by these 
                Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Products and Pricing</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>All prices are listed in Indian Rupees (₹) and are subject to change without notice</li>
                <li>We strive to display accurate product information, but errors may occur</li>
                <li>We reserve the right to limit quantities or refuse any order</li>
                <li>Product images are for illustration purposes and may vary slightly from actual products</li>
              </ul>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Orders and Payments</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>All orders are subject to acceptance and availability</li>
                <li>Payment must be completed before order processing</li>
                <li>We accept UPI, bank transfers, and other payment methods as communicated</li>
                <li>Orders are confirmed via WhatsApp after payment verification</li>
              </ul>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on this website, including text, images, logos, and design elements, is the 
                property of Maktabah Abu Hurayrah and is protected by copyright laws. You may not 
                reproduce, distribute, or use any content without our written permission.
              </p>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">User Conduct</h2>
              <p className="text-muted-foreground">You agree not to:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the website</li>
                <li>Upload malicious code or harmful content</li>
              </ul>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, Maktabah Abu Hurayrah shall not be liable for 
                any indirect, incidental, or consequential damages arising from the use of our website 
                or products.
              </p>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms of Service shall be governed by and construed in accordance with the laws 
                of India. Any disputes shall be subject to the exclusive jurisdiction of the courts 
                in India.
              </p>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms of Service at any time. Changes will be 
                effective immediately upon posting on the website. Your continued use of the website 
                constitutes acceptance of the modified terms.
              </p>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at 
                abuhurayrahessentials@gmail.com or via WhatsApp at +91 84919 43437.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Terms;