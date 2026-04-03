import { useCart } from '../../context/CartContext';
import { Trash2, Minus, Plus } from 'lucide-react';


export default function CartItem({ item }) {
  const { addToCart, removeFromCart } = useCart();   // We'll add removeFromCart soon

  const handleIncrease = () => {
    addToCart(item, 1);        // Increase by 1
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      // Decrease by 1
      addToCart(item, -1);
    } else {
      // Remove item if quantity becomes 0
      removeFromCart(item.id);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="cart-product-card">
        
        <div className="cart-thumbnail">
            <img src={item.thumbnail} alt={item.title} />
        </div>

      {/* Product Details */}
      <div className="dynamic-price-container">
        <div className="cart-prices-btn">
            <div className="cart-product-details">
                <p >{item.category}</p>
                <h2>{item.title}</h2>
                
                <p>
                Unit: ${item.price.toFixed(2)}
                </p>
            </div>
            <div className="text-right">
                <p>
                ${(item.price * item.quantity).toFixed(2)}
                </p>
            </div>
        </div>
        {/* Quantity Controls */}
        <div className="add-del-container">
            <div className="qty-cart-container">
                <div className="qty-cart-btn">
                    <button 
                        onClick={handleDecrease}
                        className="qty-cart-btn"
                    >
                    <Minus size={12} className="text-gray-600" />
                    </button>
                </div>
                <div className="cart-qty-text">{item.quantity}</div>
                <div className="qty-cart-btn">
                    <button 
                    onClick={handleIncrease}
                    className="qty-cart-btn"
                    >
                    <Plus size={12} className="text-gray-600" />
                    </button>
                </div>
            </div>
            <button 
                onClick={handleRemove}
                className="cart-delete-btn"
            >
                <Trash2 size={14} />
                Remove
            </button>
        </div>
      </div>
      
    </div>
  );
}