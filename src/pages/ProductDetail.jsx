import { useParams, useNavigate } from 'react-router-dom';
import FormatCurrency from '../components/CurrencyFormatter';
import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import BackButton from '../ui/BackButton';
import { UpperCase } from '../components/UpperCase';
import StarRating from '../components/StarRating';
import StockStatus from '../components/Inventory';
import QuantitySelector from '../ui/QuantitySelector';
import ServiceInfo from '../components/ServiceInfo';
import YouMayAlsoLike from '../components/YouMayAlsoLike';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);

        if (!res.ok) {
          throw new Error('Product not found');
        }

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);
  const handleAddToCart = () => {
      if (!product || product.stock <= 0) return;

      addToCart(product, quantity);     // ← Now using context

      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    };
  if (loading) {
    return <div className="text-center py-20">Loading product...</div>;
  }

  if (error || !product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-4">Product not found</h2>
        <button 
          onClick={() => navigate('/shop')}
          className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <div className="detail-wrapper">
      
      <BackButton />

      <div className="product-detail-content">
        {/* Image */}
        <div className="product-img">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-h-[520px] object-contain mx-auto"
          />
        </div>

        {/* Details */}
        <div className='product-details'>
          <div className="detail-brand-title">
            <p className="text-sm detail-product-category text-gray-500">{UpperCase(product.category)}</p>
            <h1 className="detail-product-title font-semibold">{product.title}</h1>
          </div>
          <div className="rating-brand">
            
            <StarRating rating={product.rating} />
            <span className='product-brand'>. {product.brand}</span>
          </div>
          <div className="detail-price">
            <FormatCurrency amount={product.price} />
          </div>
          <StockStatus stock={product.stock}/>
          <div className="qty-cart-btns">
            <QuantitySelector 
              initialQuantity={1}
              maxQuantity={product.stock || 99}
              onQuantityChange={(qty) => console.log('New quantity:', qty)} 
            />
            <button 
              onClick={handleAddToCart}
              disabled={product.stock <= 0}
              className={`cart-btn ${
                product.stock > 0 
                  ? 'can-stock' 
                  : 'disable-stock'
              }`}
            >
              <ShoppingBag size={16} />
              {addedToCart ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>
          </div>
          <ServiceInfo />
        </div>
      </div>
      <div className="discr-detail-container">
        <div className="discr-detail-btns ">
          <button 
            className={activeTab === 'description' ? 'active' : ''}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>

          <button 
            className={activeTab === 'details' ? 'active' : ''}
            onClick={() => setActiveTab('details')}
          >
            Details
          </button>
        </div>

        <div className="dynamic-info">
          {activeTab === 'description' ? (
            <p>{product.description}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <table className="dynamic-info-table w-full">
                <tbody>
                  <tr>
                    <td className="font-medium text-gray-600 py-3 pr-8">Category</td>
                    <td className="py-3 text-gray-800">{product.category || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-600 py-3 pr-8">Brand</td>
                    <td className="py-3 text-gray-800">{product.brand || '--'}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-600 py-3 pr-8">SKU</td>
                    <td className="py-3 text-gray-800">{product.sku || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-600 py-3 pr-8">Rating</td>
                    <td className="py-3 text-gray-800">
                      {product.rating ? `${product.rating} / 5` : 'N/A'}
                    </td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-600 py-3 pr-8">Stock</td>
                    <td className="py-3 text-gray-800">{product.stock || 'N/A'} units</td>
                  </tr>
                </tbody>
              </table>

            </div>
          )}
        </div>
      </div>

      {/* You May Also Like Section */}
      <YouMayAlsoLike category={product.category} currentProductId={product.id} />
      </div>
    </div>
  );
}