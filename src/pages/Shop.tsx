import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { products, categories, getProductsByCategory, searchProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, X, Filter, BookOpen, Shirt, Package } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  useEffect(() => {
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    if (category) setSelectedCategory(category);
    if (search) setSearchQuery(search);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = selectedCategory === 'All' ? products : getProductsByCategory(selectedCategory);
    
    if (searchQuery.trim()) {
      const searchResults = searchProducts(searchQuery);
      result = result.filter(p => searchResults.includes(p));
    }
    
    return result;
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const newParams = new URLSearchParams(searchParams);
    if (category === 'All') {
      newParams.delete('category');
    } else {
      newParams.set('category', category);
    }
    setSearchParams(newParams);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    const newParams = new URLSearchParams(searchParams);
    if (value.trim()) {
      newParams.set('search', value);
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSearchParams({});
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    Books: <BookOpen size={14} />,
    Clothing: <Shirt size={14} />,
    Honey: <Package size={14} />,
    Combos: <Package size={14} />,
    Saffron: <Package size={14} />,
  };

  const mainCategories = ['All', 'Books', 'Clothing', 'Honey', 'Combos'];

  return (
    <>
      <Helmet>
        <title>Shop - Maktabah Abu Hurayrah</title>
        <meta name="description" content="Browse our collection of authentic Islamic books, traditional clothing, pure honey, and saffron." />
      </Helmet>
      <Layout>
        <div className="container mx-auto px-4 py-8 animate-fade-in">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="font-philosopher text-3xl md:text-4xl font-bold mb-2">
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h1>
            <p className="text-muted-foreground">
              {filteredProducts.length} products found
            </p>
          </div>

          {/* Filters Section - Reorganized */}
          <div className="bg-card rounded-xl p-4 border border-border mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter size={16} className="text-muted-foreground" />
              <span className="text-sm font-medium">Filter Products</span>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-9 pr-9 h-9"
                />
                {searchQuery && (
                  <button
                    onClick={() => handleSearchChange('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {mainCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleCategoryChange(category)}
                    className={`font-philosopher flex items-center gap-1.5 ${
                      selectedCategory === category 
                        ? 'bg-primary text-primary-foreground' 
                        : 'hover:bg-muted'
                    }`}
                  >
                    {categoryIcons[category]}
                    {category === 'Honey' ? 'Essentials' : category}
                  </Button>
                ))}
              </div>

              {(selectedCategory !== 'All' || searchQuery) && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="text-destructive hover:text-destructive/80 hover:bg-destructive/10"
                >
                  <X size={14} className="mr-1" />
                  Clear
                </Button>
              )}
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">No products found matching your criteria.</p>
              <Button onClick={clearFilters} className="bg-primary text-primary-foreground hover:bg-primary/90">
                View All Products
              </Button>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Shop;
