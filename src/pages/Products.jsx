import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Products() {
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(products.map(p => p.category))];

  const filteredProducts = category === "All"
    ? products
    : products.filter(p => p.category === category);

  return (
    <div className="products-page">

      <div className="page-heading">
        <p>EXPLORE OUR COLLECTION</p>
        <h1>All Products</h1>
        <span>Find something you'll love.</span>
      </div>

      <div className="category-filter">
        {categories.map(item => (
          <button
            key={item}
            className={category === item ? "selected" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}

export default Products;