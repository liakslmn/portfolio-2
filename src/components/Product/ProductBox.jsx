import React from "react";
import "./Product.scss";

function ProductBox({ image, header, price, content }) {
  return (
    <div className="product-box">
      <img src={image} alt="" />
      <div className="product-box-text">
        <div className="product-title">
          <h5>{header}</h5>
          <p>{content}</p>
        </div>
        <button>View More</button>
      </div>
    </div>
  );
}

export default ProductBox;
