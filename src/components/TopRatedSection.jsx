import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CapitalizeCategory } from './Capitalized'
import FormatCurrency from './CurrencyFormatter'
export default function TopRatedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopRated = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products?limit=100');
        const data = await res.json();
        
        // Sort by rating (highest first) and take top 4
        const sorted = [...data.products]
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 8);

        setProducts(sorted);
      } catch (error) {
        console.error("Failed to fetch top rated products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopRated();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading top products...</div>;
  }

  return (
    <section className="top-rated-section">
      <div className="top-rated-container">
        <div className="top-rated-header">
          <div className='top-rated-content'>
            <h2 className="toprated-editors-pick">EDITOR'S PICK</h2>
            <h2 className="top-rated-title">Top rated<br></br>
            <span>products.</span>
             
            </h2>
          </div>
          <Link to="/shop" className="view-all-link">
            View all →
          </Link>
        </div>

        <div className="product-cards">
            {products.map(product => (
            <Link to={`/shop/${product.id}`} key={product.id} className="top-rated-card">
    
                <img
                src={product.thumbnail}
                alt={product.title}
                className="rated-product-image"
                />
    
                <div style={{maxWidth:'220px', display:'flex', flexDirection:'column', textAlign:'left'}}>
    
                    <small className="rated-product-category">
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
    </section>
   
  );
}