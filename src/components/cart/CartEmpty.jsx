import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export default function CartEmpty() {
  return (
    <div className="cart-container">
      <div className="cart-empty-bag">
        <ShoppingBag size={48} className="text-gray-400" />
      </div>

      <h2 className="text-2xl font-semibold mb-3">Your cart is empty</h2>
      <p className="text-gray-600 mb-10 max-w-md">
        Looks like you haven't added anything yet.
      </p>

      <Link
        to="/shop"
        className="conitnue-shopping"
      >
        Continue Shopping →
      </Link>
    </div>
  );
}