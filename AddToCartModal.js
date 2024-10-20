import React from "react";

const AddToCartModal = ({ product, onClose, onConfirm }) => {
  if (!product) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Add to Cart</h2>
        <p>Are you sure you want to add {product.name} to the cart?</p>
        <button onClick={onConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default AddToCartModal;
