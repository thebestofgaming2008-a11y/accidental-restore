import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Input } from '@/components/ui/input';
import logo from '@/assets/logo.svg';

const Header = () => {
  const { totalItems } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [booksExpanded, setBooksExpanded] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setMobileMenuOpen(false);
    }
  };

  const handleNavClick = (to: string) => {
    setMobileMenuOpen(false);
    navigate(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const bookSubcategories = [
    { label: 'Aqeedah', to: '/shop?search=aqeedah' },
    { label: 'Tafsir', to: '/shop?search=tafsir' },
    { label: 'Hadith', to: '/shop?search=hadith' },
    { label: 'Fiqh', to: '/shop?search=fiqh' },
    { label: 'Seerah', to: '/shop?search=seerah' },
    { label: 'Tawheed', to: '/shop?search=tawheed' },
  ];

  const mainNavItems = [
    { label: 'All Products', to: '/shop' },
    { label: 'Books', to: '/shop?category=Books', hasSubmenu: true },
    { label: 'Clothing', to: '/shop?category=Clothing' },
    { label: 'Essentials', to: '/shop?category=Honey' },
    { label: 'Contact', to: '/contact' },
  ];

  const policyPages = [
    { label: 'Shipping Policy', to: '/shipping' },
    { label: 'Cancellation Policy', to: '/cancellations' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm">
      {/* Permanent Notice Bar */}
      <div className="bg-primary/10 text-primary text-center py-1 px-4 text-xs font-medium">
        <span>📦 All orders shipped within 2-3 business days</span>
      </div>

      {/* Main Header - Compact */}
      <div className="container mx-auto px-4 py-2">
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
            <img src={logo} alt="Maktabah Abu Hurayrah" className="h-7" />
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

        {/* Desktop: Compact layout with aligned cart */}
        <div className="hidden lg:flex items-center justify-between gap-4">
          {/* Left spacer for balance */}
          <div className="w-8" />
          
          {/* Centered Logo and Search */}
          <div className="flex-1 flex flex-col items-center">
            <Link to="/" className="flex flex-col items-center gap-0.5">
              <img src={logo} alt="Maktabah Abu Hurayrah" className="h-8" />
              <span className="text-[10px] text-muted-foreground font-philosopher">
                Islamic Essentials for Daily Life
              </span>
            </Link>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="mt-1.5 w-full max-w-md">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for books, clothing, honey..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-9 bg-background h-8 text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Search"
                >
                  <Search size={14} />
                </button>
              </div>
            </form>
          </div>

          {/* Cart icon - aligned with nav */}
          <Link 
            to="/cart" 
            className="relative p-1.5 hover:bg-muted rounded-md transition-colors"
            aria-label="Shopping cart"
          >
            <ShoppingCart size={18} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </Link>
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
              <Search size={14} />
            </button>
          </div>
        </form>
      </div>

      {/* Navigation Bar - Desktop */}
      <nav className="hidden lg:block border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-6 py-1.5">
            {mainNavItems.map((item) => (
              <li key={item.label} className="relative group">
                <button
                  onClick={() => handleNavClick(item.to)}
                  className="text-sm font-semibold text-foreground hover:text-primary transition-colors font-philosopher flex items-center gap-1"
                >
                  {item.label}
                  {item.hasSubmenu && <ChevronDown size={12} />}
                </button>
                {/* Books Dropdown */}
                {item.hasSubmenu && (
                  <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[160px]">
                      {bookSubcategories.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => handleNavClick(sub.to)}
                          className="block w-full text-left px-4 py-1.5 text-sm hover:bg-muted transition-colors"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-border bg-card absolute left-0 right-0 top-full shadow-lg max-h-[80vh] overflow-y-auto animate-fade-in z-50">
          <div className="py-3 px-4">
            {/* Main Navigation */}
            <div className="space-y-1 mb-3">
              {mainNavItems.map((item) => (
                <div key={item.label}>
                  {item.hasSubmenu ? (
                    <>
                      <button
                        onClick={() => setBooksExpanded(!booksExpanded)}
                        className="w-full flex items-center justify-between py-2 px-3 text-sm font-semibold text-foreground hover:bg-muted rounded-md transition-colors font-philosopher"
                      >
                        {item.label}
                        {booksExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                      {booksExpanded && (
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary/20 pl-3">
                          <button
                            onClick={() => handleNavClick(item.to)}
                            className="block w-full text-left py-1.5 px-2 text-sm text-foreground hover:text-primary transition-colors"
                          >
                            All Books
                          </button>
                          {bookSubcategories.map((sub) => (
                            <button
                              key={sub.label}
                              onClick={() => handleNavClick(sub.to)}
                              className="block w-full text-left py-1.5 px-2 text-sm text-foreground hover:text-primary transition-colors"
                            >
                              {sub.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.to)}
                      className="block w-full text-left py-2 px-3 text-sm font-semibold text-foreground hover:bg-muted rounded-md transition-colors font-philosopher"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Policy Pages */}
            <div className="border-t border-border pt-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3">
                Policies
              </p>
              <div className="space-y-1">
                {policyPages.map((page) => (
                  <button
                    key={page.label}
                    onClick={() => handleNavClick(page.to)}
                    className="block w-full text-left py-1.5 px-3 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                  >
                    {page.label}
                  </button>
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