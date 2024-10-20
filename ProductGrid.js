import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import AddToCartModal from "./AddToCartModal";
import Pagination from "./Pagination";
// import Footer from "./Footer.js";

const ProductGrid = () => {
  const totalProducts = 300;
  const productsPerPage = 12;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const productList = Array.from({ length: totalProducts }, (_, index) => ({
    id: index + 1,
    name: `Plant ${index + 1}`,
    description: "Indoor Plant, Low maintenance",
    price: Math.floor(Math.random() * (500 - 150 + 1)) + 150,
    oldPrice: Math.floor(Math.random() * (600 - 200 + 1)) + 200,
    rating: (Math.random() * 2 + 3).toFixed(1),
    imageUrl: "https://via.placeholder.com/150",
    // imageUrl: "./istockphoto-1372896722-612x612.jpg",
    // imageUrl:
    // "https://unsplash.com/photos/a-plant-with-green-leaves-against-a-pink-wall-46Kdn0hWQPg",
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState(
    productList.slice(0, productsPerPage)
  );
  const [showModal, setShowModal] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  useEffect(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    setCurrentProducts(
      productList.slice(startIndex, startIndex + productsPerPage)
    );
  }, [currentPage]);

  const handleViewProduct = (product) => {
    // Redirect to Thank You page
    window.location.href = `/thank-you?product=${product.name}`;
  };

  const handleAddToCart = (product) => {
    setModalProduct(product);
    setShowModal(true);
  };

  const confirmAddToCart = () => {
    // Logic to add the product to cart
    console.log(`Added ${modalProduct.name} to cart`);
    setShowModal(false);
    setModalProduct(null);
  };

  return (
    <div className="product-grid-container">
      <div className="filter-section">
        <div className="filter-box">
          <h3>Filter</h3>
          <button className="clear-all">CLEAR ALL</button>
          <ul className="filter-options">
            <li>Type of Plants</li>
            <li>Price</li>
            <li>Nursery</li>
            <li>Ideal Plants Location</li>
            <li>Indoor/Outdoor</li>
            <li>Maintenance</li>
            <li>Plant Size</li>
            <li>Water Schedule</li>
            <li>Color</li>
            <li>Seasonal</li>
            <li>Light Efficient</li>
          </ul>
        </div>
      </div>

      <div className="product-section">
        <div className="product-grid">
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewProduct={handleViewProduct}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      {showModal && (
        <AddToCartModal
          product={modalProduct}
          onClose={() => setShowModal(false)}
          onConfirm={confirmAddToCart}
        />
      )}
    </div>
  );
};

export default ProductGrid;
