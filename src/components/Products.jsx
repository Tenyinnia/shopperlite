import { Link } from 'react-router-dom';
import FormatCurrency from './CurrencyFormatter.jsx';
import {CapitalizeCategory} from './Capitalized.jsx'
import NotFound from '../pages/NotFound.jsx'

export default function Products({ products, loading, error}) {
  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading products...</div>;
  }
  if (error) {
    return (
      <NotFound />
    );
  }

  if (products.length === 0) {
    return (
      <p style={{ textAlign: 'center', color: '#777' }}>
        No products found.
      </p>
    );
  }

  return (
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
  );
}