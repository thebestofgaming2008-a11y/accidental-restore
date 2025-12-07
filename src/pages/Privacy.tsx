import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Maktabah Abu Hurayrah</title>
        <meta name="description" content="Learn how we collect, use, and protect your personal information." />
      </Helmet>
      <Layout>
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-philosopher text-3xl md:text-4xl font-bold text-center mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Introduction</h2>
              <p className="text-muted-foreground">
                Maktabah Abu Hurayrah ("we", "our", or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, and safeguard your personal information 
                when you use our website and services.
              </p>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Information We Collect</h2>
              <p className="text-muted-foreground">We may collect the following types of information:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Personal Information:</strong> Name, email address, phone number, shipping address</li>
                <li><strong>Order Information:</strong> Products purchased, order history, payment details</li>
                <li><strong>Device Information:</strong> Browser type, IP address, device type</li>
                <li><strong>Usage Information:</strong> Pages visited, time spent on site, referring websites</li>
              </ul>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground">We use your information to:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders</li>
                <li>Provide customer support</li>
                <li>Send promotional emails (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Data Protection</h2>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information from 
                unauthorized access, alteration, disclosure, or destruction. However, no internet 
                transmission is completely secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Cookies</h2>
              <p className="text-muted-foreground">
                We use cookies and similar technologies to enhance your browsing experience, remember 
                your preferences, and analyze website traffic. You can control cookies through your 
                browser settings.
              </p>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground">
                We may share your information with trusted third-party service providers who assist us 
                in operating our website, processing payments, and delivering orders. These providers 
                are obligated to keep your information confidential.
              </p>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Your Rights</h2>
              <p className="text-muted-foreground">You have the right to:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="font-philosopher text-xl font-bold mt-8 mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at 
                abuhurayrahessentials@gmail.com or via WhatsApp at +91 84919 43437.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Privacy;