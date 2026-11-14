import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(state => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const paymentMethod = formData.get("payment");

    dispatch(clearCart());

    navigate("/order-success", {
      state: {
        paymentMethod,
        total
      }
    });
  };

  if (cartItems.length === 0) {
    return <h2 className="empty-message">Your cart is empty!</h2>;
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <form onSubmit={handleCheckout}>
        <h2>Delivery Details</h2>

        <input type="text" placeholder="Full Name" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="text" placeholder="Address" required />
        <input type="text" placeholder="City" required />
        <input type="text" placeholder="PIN Code" required />

        <h2>Payment Method</h2>

        <label>
          <input type="radio" name="payment" value="UPI" required />
          UPI
        </label>

        <label>
          <input type="radio" name="payment" value="Card" />
          Credit / Debit Card
        </label>

        <label>
          <input type="radio" name="payment" value="Cash on Delivery" />
          Cash on Delivery
        </label>

        <div className="checkout-total">
          <h2>Total: ₹{total.toLocaleString("en-IN")}</h2>
        </div>

        <button type="submit" className="add-cart-btn">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;