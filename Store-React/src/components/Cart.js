import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
   console.log(cart)
  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((product) => (
          <div key={product.id} className="cart-item">
            <img src={product.image} alt={product.title} />
            <div className="cart-item-details">
              <h2>{product.title}</h2>
              <p>${product.price}</p>
            </div>
            <button className="remove-btn" onClick={() => removeFromCart(product.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
