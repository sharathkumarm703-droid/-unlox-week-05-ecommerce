import { CheckCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function OrderSuccess() {
  const location = useLocation();

  const paymentMethod = location.state?.paymentMethod || "Not specified";
  const total = location.state?.total || 0;

  return (
    <div className="success-page">
      <CheckCircle size={85} color="green" />

      <h1>Order Placed Successfully!</h1>

      <p>Thank you for shopping with SHOPORA.</p>

      <p>Your order has been confirmed.</p>

      <div className="order-details">
        <h3>Order Summary</h3>

        <p>
          <strong>Payment Method:</strong> {paymentMethod}
        </p>

        <h2>
          Total Paid: ₹{total.toLocaleString("en-IN")}
        </h2>
      </div>

      <Link to="/products" className="checkout-btn">
        Continue Shopping
      </Link>
    </div>
  );
}

export default OrderSuccess;