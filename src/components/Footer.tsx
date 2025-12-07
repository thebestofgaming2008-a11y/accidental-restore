import { Link } from 'react-router-dom';
import logo from '@/assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <img src={logo} alt="Maktabah Abu Hurayrah" className="h-12 brightness-0 invert" />
            <p className="text-sm opacity-80">
              Your trusted source for authentic Islamic books, clothing, and products. 
              Following the way of the Salaf us-Salih.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-philosopher font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Books" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Books
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Clothing" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Clothing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-philosopher font-bold text-lg mb-4">Policies</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/cancellations" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Cancellations & Returns
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-philosopher font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Email: contact@maktabahabuhurayrah.com</li>
              <li>WhatsApp: +91 98765 43210</li>
              <li>Hours: Sat-Thu, 10am-6pm IST</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} Maktabah Abu Hurayrah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
