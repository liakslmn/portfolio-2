import React from "react";
import "./Product.scss";

function Product() {
  return (
    <div className="product">
      <p className="product-p">Our Product</p>
      <h2>Online Market With The Biggest Product Choice</h2>
      <h5>
        In our online store, the biggest choice of products on the planet. Free
        delivery and a lot of benefit for you yet.
      </h5>
      <button>Get Discount for $99</button>
      <div className="product-container">
        <div className="product-left">
          <div className="product-box"></div>
          <div className="product-box"></div>
        </div>
        <div className="product-right"></div>
      </div>
    </div>
  );
}

export default Product;
