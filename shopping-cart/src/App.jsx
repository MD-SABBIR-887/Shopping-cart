import { useState } from "react";

import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";

import products from "./data/products";

import "./App.css";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category))
  ];

  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">

      <Navbar
        onCartClick={() => setCartOpen(true)}
      />

      <main>

        <section className="hero">
          <div>
            <p className="hero-label">
              NEW COLLECTION
            </p>

            <h1>
              Find Products
              <br />
              You'll Love
            </h1>

            <p>
              Discover quality products at
              amazing prices.
            </p>
          </div>
        </section>

        <section className="products-section">

          <div className="section-header">

            <div>
              <h2>Our Products</h2>
              <p>
                Browse our latest collection
              </p>
            </div>

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          <div className="category-buttons">

            {categories.map((item) => (
              <button
                key={item}
                className={
                  category === item
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setCategory(item)
                }
              >
                {item}
              </button>
            ))}

          </div>

          <ProductGrid
            products={filteredProducts}
          />

        </section>

      </main>

      {cartOpen && (
        <div className="cart-overlay">

          <Cart
            onClose={() => setCartOpen(false)}
          />

        </div>
      )}

    </div>
  );
}

export default App;