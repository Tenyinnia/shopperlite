import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

export default function QuantitySelector({ 
  initialQuantity = 1, 
  maxQuantity = 99,
  onQuantityChange 
}) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      onQuantityChange?.(newQty);
    }
  };

  const handleIncrease = () => {
    if (quantity < maxQuantity) {
      const newQty = quantity + 1;
      setQuantity(newQty);
      onQuantityChange?.(newQty);
    }
  };

  return (
    <div className="qty-cart-container">
      <div className="qty-cart-btn">
        <button
          onClick={handleDecrease}
          disabled={quantity === 1}
          className="qty-cart-btn"
        >
          <Minus size={13} className="plus-minus" />
        </button>
      </div>
      

      <div className="qty-text">
        {quantity}
      </div>
      <div className="qty-cart-btn">
          <button
              onClick={handleIncrease}
              disabled={quantity === maxQuantity}
              className="qty-cart-btn"
            >
              <Plus size={13} className="plus-add" />
            </button>
      </div>
            
    </div>
  );
}