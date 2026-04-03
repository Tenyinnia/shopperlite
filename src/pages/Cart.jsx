import { useCart } from '../context/CartContext';
import CartEmpty from '../components/cart/CartEmpty';
import CartWithItems from '../components/cart/CartWithItems';

export default function Cart() {
  const { cart } = useCart();
    return(
        <>
        <div className="max-w-6xl mx-auto px-6 py-12">
        {cart.length === 0 ? (
          <CartEmpty />
        ) : (
          <CartWithItems cart={cart} />
        )}
      </div>
        
        </>
    )
}