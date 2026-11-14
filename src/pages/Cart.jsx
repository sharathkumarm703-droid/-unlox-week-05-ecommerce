import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} from "../features/cart/cartSlice";

import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <p>Review your selected products.</p>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <ShoppingBag size={60} />
          <h2>Your cart is empty!</h2>
          <Link to="/products">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price.toLocaleString("en-IN")}</p>

                  <div className="quantity-controls">
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                      <Minus size={16} />
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => dispatch(increaseQuantity(item.id))}>
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  <Trash2 />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>

            <h3>Total: ₹{total.toLocaleString("en-IN")}</h3>

            <button onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>

            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout →
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;