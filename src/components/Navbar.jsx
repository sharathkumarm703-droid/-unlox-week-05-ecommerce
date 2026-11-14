import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingBag, Heart, ShoppingCart } from "lucide-react";

function Navbar() {
  const cartItems = useSelector(state => state.cart.items);
  const wishlistItems = useSelector(state => state.wishlist.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity, 0
  );

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <ShoppingBag size={26} />
        SHOPORA
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>

        <Link to="/wishlist">
          <Heart size={18} /> Wishlist ({wishlistItems.length})
        </Link>

        <Link to="/cart">
          <ShoppingCart size={18} /> Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;