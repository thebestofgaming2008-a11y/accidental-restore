import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { categories } from '@/data/products';
import { Input } from '@/components/ui/input';
import logo from '@/assets/logo.svg';

const Header = () => {
  const { totalItems } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotice, setShowNotice] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const dismissed = localStorage.getItem('customs-notice-dismissed');
    if (dismissed === 'true') {
      setShowNotice(false);
    }
  }, []);

  const handleDismissNotice = () => {
    setShowNotice(false);
    localStorage.setItem('customs-notice-dismissed', 'true');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setMobileMenuOpen(false);
    }
  };

  const mainNavItems = [
    { label: 'All Products', to: '/shop' },
    { label: 'Books', to: '/shop?category=Books' },
    { label: 'Clothing', to: '/shop?category=Clothing' },
    { label: 'Essentials', to: '/shop?category=Honey' },
    { label: 'Contact', to: '/contact' },
  ];

  const allCategories = categories.filter(cat => cat !== 'All');

  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm">
      {/* Customs Notice Bar */}
      {showNotice && (
        <div className="bg-[hsl(45,100%,95%)] text-[hsl(30,50%,30%)] text-center py-1.5 px-4 text-xs font-medium relative">
          <span>Important: International orders may be subject to customs duties</span>
          <button
            onClick={handleDismissNotice}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-[hsl(30,50%,30%,0.1)] rounded transition-colors"
            aria-label="Dismiss notice"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Main Header - Compact */}
      <div className="container mx-auto px-4 py-3">
        {/* Mobile: Flex layout with menu, logo, cart */}
        <div className="lg:hidden flex items-center justify-between">
          <button
            className="p-1.5 -ml-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <Link to="/" className="flex flex-col items-center">
            <img src={logo} alt="Maktabah Abu Hurayrah" className="h-8" />
          </Link>

          <Link to="/cart" className="relative p-1.5 -mr-1.5">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold text-[10px]">
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Desktop: Centered layout - More compact */}
        <div className="hidden lg:block relative">
          {/* Cart icon - floating top right */}
          <Link to="/cart" className="absolute right-0 top-0 relative p-1.5">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold text-[10px]">
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </Link>

          {/* Centered Logo and Tagline */}
          <div className="flex flex-col items-center">
            <Link to="/" className="flex flex-col items-center gap-1">
              <img src={logo} alt="Maktabah Abu Hurayrah" className="h-10" />
              <span className="text-xs text-muted-foreground font-philosopher">
                Islamic Essentials for Daily Life
              </span>
            </Link>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="mt-2 w-full max-w-md">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for books, clothing, honey..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-9 bg-background h-9 text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Search"
                >
                  <Search size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="lg:hidden mt-2">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-9 bg-background h-8 text-sm"
            />
            <button
              type="submit"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Search"
            >
              <Search size={16} />
            </button>
          </div>
        </form>
      </div>

      {/* Navigation Bar - Desktop */}
      <nav className="hidden lg:block border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-6 py-2">
            {mainNavItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-sm font-semibold text-foreground hover:text-primary transition-colors font-philosopher"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-border bg-card absolute left-0 right-0 top-full shadow-lg max-h-[70vh] overflow-y-auto animate-fade-in">
          <div className="py-3 px-4">
            {/* Main Navigation */}
            <div className="space-y-1 mb-3">
              {mainNavItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 px-3 text-sm font-semibold text-foreground hover:bg-muted rounded-md transition-colors font-philosopher"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Categories */}
            <div className="border-t border-border pt-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3">
                Categories
              </p>
              <div className="grid grid-cols-2 gap-1">
                {allCategories.map((category) => (
                  <Link
                    key={category}
                    to={`/shop?category=${category}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1.5 px-3 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;