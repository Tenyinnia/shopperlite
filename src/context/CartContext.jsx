import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);

      if (existing) {
        const newQuantity = existing.quantity + quantity;
        if (newQuantity <= 0) {
          return prevCart.filter(item => item.id !== product.id);
        }
        return prevCart.map(item =>
          item.id === product.id 
            ? { ...item, quantity: newQuantity }
            : item
        );
      } else if (quantity > 0) {
        return [...prevCart, {
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          quantity: quantity
        }];
      }
      return prevCart;
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => {
      setCart([]);
    };
  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      clearCart,
      addToCart, 
      removeFromCart, 
      getTotalItems 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);