import React from "react";

const ProductCard = ({ product, onViewProduct, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h4 className="view-product" onClick={() => onViewProduct(product)}>
        View Product
      </h4>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price-rating">
        <span className="old-price">₹ {product.oldPrice}</span>
        <span className="new-price">₹ {product.price}</span>
        <span className="rating">⭐ {product.rating}</span>
      </div>
      <div className="product-actions">
        <button className="add-to-cart" onClick={() => onAddToCart(product)}>
          - Add to cart +
        </button>
        <button> Buy on Rent</button>
      </div>
    </div>
  );
};

export default ProductCard;
