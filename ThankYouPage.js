import React from "react";

const ThankYouPage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productName = urlParams.get("product");

  return (
    <div className="thank-you-page">
      <h1>Thank You!</h1>
      {productName && <p>Thank you for your interest in {productName}!</p>}
    </div>
  );
};

export default ThankYouPage;
