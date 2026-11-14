import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice";
import ProductCard from "../components/ProductCard";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

function Wishlist() {
  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    state => state.wishlist.items
  );

  return (
    <div className="wishlist-page">
      <h1>My Wishlist ❤️</h1>
      <p>Your favourite products are waiting for you.</p>

      {wishlistItems.length === 0 ? (
        <div className="empty-cart">
          <Heart size={60} />
          <h2>Your wishlist is empty!</h2>
          <Link to="/products">Explore Products</Link>
        </div>
      ) : (
        <div className="product-grid">
          {wishlistItems.map(product => (
            <div key={product.id}>
              <ProductCard product={product} />

              <button
                className="remove-wishlist"
                onClick={() => dispatch(removeFromWishlist(product.id))}
              >
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;