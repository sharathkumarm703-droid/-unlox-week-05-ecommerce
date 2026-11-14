import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, Truck, ShieldCheck, Headphones } from "lucide-react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">WELCOME TO SHOPORA</p>

          <h1>
            Discover Your
            <br />
            Perfect Style.
          </h1>

          <p>
            Explore the latest trends, premium products
            and amazing deals all in one place.
          </p>

          <Link to="/products" className="shop-btn">
            Shop Now <ArrowRight size={20} />
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900"
            alt="Shopping collection"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits">
        <div>
          <Truck />
          <h3>Free Delivery</h3>
          <p>On orders above ₹999</p>
        </div>

        <div>
          <ShieldCheck />
          <h3>Secure Shopping</h3>
          <p>Safe and secure payments</p>
        </div>

        <div>
          <Headphones />
          <h3>24/7 Support</h3>
          <p>We're here to help</p>
        </div>
      </section>

      {/* Products */}
      <section className="featured">
        <div className="section-heading">
          <div>
            <p>OUR COLLECTION</p>
            <h2>Featured Products</h2>
          </div>
        </div>

        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search your favourite products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="no-products">No products found.</p>
        )}

        <Link to="/products" className="view-all">
          View All Products <ArrowRight size={18} />
        </Link>
      </section>

    </div>
  );
}

export default Home;