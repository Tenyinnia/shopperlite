import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import ConfirmModal from '../../ui/DelConfirmModal';

export default function CartWithItems({ cart }) {
  const { getTotalItems, clearCart } = useCart();
  const [showConfirm, setShowConfirm] = useState(false);

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleClearCart = () => {
    setShowConfirm(true);
  };

  const confirmClear = () => {
    clearCart();
    setShowConfirm(false);
  };
  return (
    <>
    <div className="with-cart-container">
        {/* Left: Cart Items */}
        <div className="with-cart-wrapper">
            <div className="data-left">
                <div className="with-cart-card name">
                    <h1>
                        Shopping Cart <span>({getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''})</span>
                    </h1>
                </div>
                
                <div className="card-product-cart">
                    <div className="space-y-8">
                        {cart.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>

                    <div className="clear-cart-button">
                        <button onClick={handleClearCart}>
                            Clear cart
                        </button>
                    </div>
                </div>
                
            </div>
            <div className="shipping-table-container">
                <h4>Order Summary</h4>   
                <table className="order-summary-table">
                    <tbody>
                        <tr>
                        <td>Subtotal ({getTotalItems()} items)</td>
                        <td>${subtotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                        <td>Shipping</td>
                        <td>${shipping.toFixed(2)}</td>
                        </tr>
                        <tr>
                        <td >Tax (8%)</td>
                        <td>${tax.toFixed(2)}</td>
                        </tr>
                    </tbody>

                    {/* Total Row */}
                    <tfoot>
                        <tr className="border-t-2 border-gray-300">
                        <td className="py-5 text-lg font-semibold">Total</td>
                        <td className="py-5 text-right text-lg font-semibold">
                            ${total.toFixed(2)}
                        </td>
                        </tr>
                    </tfoot>
                </table>

                {/* Free Shipping Message */}
                {subtotal < 150 && (
                <p className="shipping-discount">
                    Add ${(150 - subtotal).toFixed(2)} more for free shipping
                </p>
                )}

                <div className="shipping-table-btns">
                    <button className="conitnue-shoppings">
                    Checkout
                    </button>

                    <Link 
                    to="/shop"
                    className="back-shopping"
                    >
                    Continue Shopping
                    </Link>
                </div>
            </div>
            
        </div>
    <ConfirmModal 
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={confirmClear}
        className="confirm-modal"
      />
    </div>

    </>
  );
}