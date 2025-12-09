import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, Instagram } from 'lucide-react';
import logo from '@/assets/logo.svg';

const Footer = () => {
  const handleNavClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src={logo} alt="Maktabah Abu Hurayrah" className="h-10" />
            <p className="text-sm text-muted-foreground">Your trusted source for authentic Islamic books, clothing, and essentials.</p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/abuhurayrahessentials" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors"><Instagram size={18} /></a>
              <a href="https://wa.me/918491943437" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-primary/10 hover:text-primary transition-colors"><MessageCircle size={18} /></a>
            </div>
          </div>
          <div>
            <h4 className="font-philosopher font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" onClick={handleNavClick} className="text-sm text-muted-foreground hover:text-primary transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=Books" onClick={handleNavClick} className="text-sm text-muted-foreground hover:text-primary transition-colors">Books</Link></li>
              <li><Link to="/shop?category=Clothing" onClick={handleNavClick} className="text-sm text-muted-foreground hover:text-primary transition-colors">Clothing</Link></li>
              <li><Link to="/contact" onClick={handleNavClick} className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-philosopher font-bold text-lg mb-4">Policies</h4>
            <ul className="space-y-2">
              <li><Link to="/shipping" onClick={handleNavClick} className="text-sm text-muted-foreground hover:text-primary transition-colors">Shipping Policy</Link></li>
              <li><Link to="/cancellations" onClick={handleNavClick} className="text-sm text-muted-foreground hover:text-primary transition-colors">Cancellation Policy</Link></li>
              <li><Link to="/privacy" onClick={handleNavClick} className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" onClick={handleNavClick} className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-philosopher font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2"><Mail size={16} className="text-primary" /><a href="mailto:abuhurayrahessentials@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">abuhurayrahessentials@gmail.com</a></li>
              <li className="flex items-center gap-2"><Phone size={16} className="text-primary" /><a href="tel:+918491943437" className="text-sm text-muted-foreground hover:text-primary transition-colors">+91 84919 43437</a></li>
              <li className="flex items-center gap-2"><MessageCircle size={16} className="text-primary" /><a href="https://wa.me/918491943437" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">WhatsApp Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Maktabah Abu Hurayrah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;