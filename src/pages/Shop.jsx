import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SideBar from '../components/CategoryFilter.jsx';
import Products from '../components/Products.jsx';
import SortDropdown from '../ui/ProductQuickSearch.jsx';
import ProductCount from '../components/ProductCount.jsx';
import NoProductsFound from '../components/ProductNotFound.jsx';
import FilterDropdown from '../ui/MobileCategoryFilter.jsx';

export default function Shop() {
  const [searchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get('cat');
  const searchFromUrl = searchParams.get('search');   // ← New: Get search query

  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');   // For live search
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sortOption, setSortOption] = useState('featured');

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products?limit=100');
        const data = await res.json();
        const products = data.products;

        setAllProducts(products);

        const uniqueCats = [...new Set(
          products.map(p => p.category).filter(c => typeof c === 'string' && c.trim())
        )].sort();

        setCategories(['All', ...uniqueCats]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle URL parameters (category & search)
  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
    if (searchFromUrl) {
      setSearchTerm(searchFromUrl);
    }
  }, [categoryFromUrl, searchFromUrl]);

  
  let displayedProducts = allProducts;

  if (selectedCategory !== 'All') {
    displayedProducts = displayedProducts.filter(p => p.category === selectedCategory);
  }

  
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    displayedProducts = displayedProducts.filter(product =>
      product.title?.toLowerCase().includes(term) ||
      product.brand?.toLowerCase().includes(term) ||
      product.category?.toLowerCase().includes(term)
    );
  }

  // Sort products
  const sortedProducts = [...displayedProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-high-low':
        return Number(b.price) - Number(a.price);
      case 'price-low-high':
        return Number(a.price) - Number(b.price);
      case 'top-rated':
        return (Number(b.rating) || 0) - (Number(a.rating) || 0);
      case 'featured':
        const scoreA = (Number(a.stock) || 0) + (Number(a.rating) || 0) * 10;
        const scoreB = (Number(b.stock) || 0) + (Number(b.rating) || 0) * 10;
        return scoreB - scoreA;
      default:
        return 0;
    }
  });

  return (
      <div className='wrapper'>
        <aside className='sidebar'>
          <SideBar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </aside>

        <div className="shop-container">
          <div className="product-filter-sort">
            <ProductCount count={sortedProducts.length} />
            <div className="sort-filter">
              <FilterDropdown
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory} 
              />
              <SortDropdown
                value={sortOption}
                onChange={setSortOption}
              />
            </div>
          </div>
          {displayedProducts ? (
            <Products
              products={sortedProducts}
              loading={loading}
              error={error}
            />
            
          ) : (
            <NoProductsFound />
          )}
        </div>
      </div>
  );
}