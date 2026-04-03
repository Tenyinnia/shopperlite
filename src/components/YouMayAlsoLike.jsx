import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FormatCurrency from './CurrencyFormatter';
import { CapitalizeCategory } from './Capitalized';

export default function YouMayAlsoLike({ category, currentProductId }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/category/${category}`);
        const data = await res.json();
        
        // Filter out current product and limit to 4
        const related = data.products
          .filter(p => p.id !== currentProductId)
          .slice(0, 4);

        setProducts(related);
      } catch (err) {
        console.error("Failed to fetch related products", err);
      }
    };

    if (category) fetchRelated();
  }, [category, currentProductId]);

  if (products.length === 0) return null;

  return (
    <div className="mt-20">
      <div className="you-may-like-container">
        <h2 className="text-2xl font-semibold">You may also like</h2>
        <Link to={`/shop?cat=${category}`} className="view-all-link">
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="product-cards">
              {products.map(product => (
                <Link to={`/shop/${product.id}`} key={product.id} className="product-card">
        
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="product-image"
                  />
        
                  <div style={{maxWidth:'220px', display:'flex', flexDirection:'column', textAlign:'left'}}>
        
                    <small className="product-card-category">
                      {CapitalizeCategory(product.category)}
                    </small>
        
                    <h4>
                      {product.title}
                    </h4>
        
                    <div className="product-info">
                      <div className="product-price">
                        <FormatCurrency amount={product.price} />
                      </div>
        
                      <div className="product-rating">
                        <span>★</span> {product.rating}
                      </div>
                    </div>
        
                    <div className="bottom-line" />
        
                  </div>
        
                </Link>
              ))}
            </div>
      </div>
    </div>
  );
}