import React from "react";
import "./Product.scss";
import iMac from "../../assets/imac.svg";
import macBook from "../../assets/macbook.svg";
import drone from "../../assets/drone.svg";
import ProductAdd from "./ProductAdd";

function Product() {
  return (
    <>
      <div className="product">
        <p className="product-p">Our Product</p>
        <h2>Online Market With The Biggest Product Choice</h2>
        <h5>
          In our online store, the biggest choice of products on the planet.
          Free delivery and a lot of benefit for you yet.
        </h5>
        <button className="btn">Get Discount for $99</button>
        <div className="product-container">
          <div className="product-left">
            <div className="product-box">
              <div className="product-box-wrapper">
                <div className="product-text">
                  <div className="product-desc">
                    <p>Apple</p>
                    <h4>iMac 27”</h4>
                    <ul>
                      <li>1TB hard drive</li>
                      <li>Two Thunderbolt 3 ports</li>
                      <li>16GB DDR4 memory</li>
                    </ul>
                  </div>
                  <div className="add-to-cart">
                    <button className="add-to-cart-button">Add to Cart</button>
                    <p className="price">$3599</p>
                  </div>
                </div>
                <div className="product-image">
                  <img src={iMac} alt="" />
                </div>
              </div>
            </div>
            <div className="product-box">
              <div className="product-box-wrapper">
                <div className="product-text">
                  <div className="product-desc">
                    <p>Apple</p>
                    <h4>MacBook Pro 15”</h4>
                    <ul>
                      <li>500GB hard drive</li>
                      <li>Two Thunderbolt 2 ports</li>
                      <li>8GB DDR4 memory</li>
                    </ul>
                  </div>
                  <div className="add-to-cart">
                    <button className="add-to-cart-button">Add to Cart</button>
                    <p className="price">$4259</p>
                  </div>
                </div>
                <div className="product-image">
                  <img src={macBook} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="product-right">
            <div className="product-desc">
              <p>Dji mavic 2 pro</p>
              <h4>Quadrocopter White</h4>
              <ul>
                <li>4K Stabilized Camera</li>
                <li>Flight Performance</li>
                <li>Weight 4.44 pounds</li>
                <li>Offers up to 4.3 miles</li>
              </ul>
              <img src={drone} alt="" />
              <p className="desc">
                A quadcopter is multi-rotor copter with four arms, each of which
                has a motor and a propeller at their ends.{" "}
              </p>
            </div>
            <div className="add-to-cart">
              <button className="add-to-cart-button">Add to Cart</button>
              <p className="price">$799</p>
            </div>
          </div>
        </div>
      </div>
      <ProductAdd />
    </>
  );
}

export default Product;
