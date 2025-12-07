import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { products, categories, getProductsByCategory, searchProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';

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

  return (
    <>
      <Helmet>
        <title>Shop - Maktabah Abu Hurayrah</title>
        <meta name="description" content="Browse our collection of authentic Islamic books, traditional clothing, pure honey, and saffron." />
      </Helmet>
      <Layout>
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="font-philosopher text-3xl md:text-4xl font-bold mb-2">
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h1>
            <p className="text-muted-foreground">
              {filteredProducts.length} products found
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10 pr-10"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 flex-1">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleCategoryChange(category)}
                  className="font-philosopher"
                >
                  {category}
                </Button>
              ))}
            </div>

            {(selectedCategory !== 'All' || searchQuery) && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear Filters
              </Button>
            )}
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">No products found matching your criteria.</p>
              <Button onClick={clearFilters}>View All Products</Button>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Shop;
