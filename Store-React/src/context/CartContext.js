import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    return savedCart || []; 
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.some((item) => item.id === product.id);
      if (!itemExists) {
        const updatedCart = [...prevCart, product];
        localStorage.setItem("cart", JSON.stringify(updatedCart)); 
        alert(`${product.title} added to cart!`);
        return updatedCart;
      } else {
        alert(`${product.title} is already in your cart!`);
        return prevCart;
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); 
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
