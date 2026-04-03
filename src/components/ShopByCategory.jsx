import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CapitalizeCategory } from './Capitalized';

export default function ShopByCategory() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const patternColors = [
    '#90a6f1', // Deep Blue
    '#f3aaaa', // Red
    '#96f3ba', // Green
    '#e7c9a6', // Amber
    '#e4f5b2'  // Indigo
  ];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products?limit=100');
        const data = await res.json();
        const products = data.products;

        const categoryMap = new Map();

        products.forEach(product => {
          if (!categoryMap.has(product.category)) {
            categoryMap.set(product.category, {
              name: product.category.charAt(0).toUpperCase() + product.category.slice(1),
              slug: product.category.toLowerCase().replace(/\s+/g, '-'),
              image: product.thumbnail || product.images?.[0]
            });
          }
        });

        const topCategories = Array.from(categoryMap.values()).slice(0, 5);
        setCategories(topCategories);
      } catch (error) {
        console.error("Failed to load categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-gray-500">Loading categories...</div>;
  }

  return (
    <section className="shop-by-category">
      <div className="category-container">
        <div className="category-header">
          <p className="category-subtitle">SHOP BY</p>
          <h2 className="category-title">Category.</h2>
        </div>

        <div className="category-grid">
          {categories.map((category, index) => {
            const color = patternColors[index] || '#1e40af';

            return (
              <Link
                key={category.slug}
                to={`/shop?cat=${category.slug}`}
                className={`category-card ${index === 0 ? 'category-card-large' : ''}`}
                style={{ 
                  '--pattern-color': patternColors[index],
                  '--arrow-color': patternColors[index]   // ← Add this
                }}
              >
                <div className="category-image-wrapper">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="category-image"
                  />
                </div>

    
                <div 
                  className="category-pattern"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${color.replace('#', '')}' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}
                />

                <div className="category-overlay">
                  <p className="category-label">COLLECTION</p>
                  <h3 className="category-name">
                    {CapitalizeCategory(category.name)}
                  </h3>
                </div>

                <div className="category-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}