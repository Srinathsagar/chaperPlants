import React, { useState, useRef } from "react";
import ProductGrid from "./ProductGrid"; // Import the ProductGrid
import Footer from "./Footer.js";
import { Link } from "react-router-dom";
// import "./PlantsAndPots.css"; // CSS for styling
import "../App.css";

const PlantsAndPots = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const nurseryRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const scrollNursery = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    nurseryRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="plants-pots-container">
      <div className="call-us">Free Shipping on orders above 999/-</div>
      <header className="header">
        <div className="logo">
          <img src="./public/logo.jpg" alt="Chaperone Logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="active">
              <Link to="/plants-pots">Plants & Pots</Link>
            </li>
            <li>
              <Link to="/tools">Tools</Link>
            </li>
            <li>
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/story">Our Story</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <div className="profile-cart">
            <Link to="/profile" className="profile-icon">
              My Profile
            </Link>
            <Link to="/cart" className="cart-icon">
              Cart <span className="cart-count">3</span>
            </Link>
          </div>
        </div>
      </header>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Plant"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="tabs">
        <button className="active">Plants</button>
        <button>Pots</button>
      </div>
      <div className="description">
        <p>
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis. Non molestiae ratione et laborum doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur.
        </p>
      </div>
      <div className="nursery-section">
        <h2>Nursery</h2>
        <div className="nursery-wrapper">
          <button
            className="arrow left-arrow"
            onClick={() => scrollNursery("left")}
          >
            {"<"}
          </button>
          <div className="nursery-items" ref={nurseryRef}>
            {Array.from({ length: 15 }).map((_, index) => (
              <div className="item" key={index}>
                <img
                  src="https://via.placeholder.com/100"
                  alt={`Item ${index + 1}`}
                />
                <p>plant {index + 1}</p>
              </div>
            ))}
          </div>
          <button
            className="arrow right-arrow"
            onClick={() => scrollNursery("right")}
          >
            {">"}
          </button>
        </div>
      </div>
      <ProductGrid /> {/* Rendering the ProductGrid component */}
      <Footer />
    </div>
  );
};

export default PlantsAndPots;
