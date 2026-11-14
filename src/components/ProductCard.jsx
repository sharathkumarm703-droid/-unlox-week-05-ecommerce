import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist
} from "../features/wishlist/wishlistSlice";

import { Heart, ShoppingCart, Star } from "lucide-react";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    state => state.wishlist.items
  );

  const isWishlisted = wishlistItems.some(
    item => item.id === product.id
  );

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />

        <button
          className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
          onClick={() =>
            isWishlisted
              ? dispatch(removeFromWishlist(product.id))
              : dispatch(addToWishlist(product))
          }
        >
          <Heart
            size={20}
            fill={isWishlisted ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="product-info">
        <p className="category">{product.category}</p>
        <h3>{product.name}</h3>

        <div className="rating">
          <Star size={16} fill="orange" color="orange" />
          {product.rating}
        </div>

        <h2>₹{product.price.toLocaleString("en-IN")}</h2>

        <button
          className="add-cart-btn"
          onClick={() => dispatch(addToCart(product))}
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;