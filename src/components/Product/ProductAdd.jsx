import React from "react";
import "./Product.scss";
import latestprod1 from "../../assets/latestprod1.svg";
import latestprod2 from "../../assets/latestprod2.svg";
import latestprod3 from "../../assets/latestprod3.svg";
import latestprod4 from "../../assets/latestprod4.svg";
import latestprod5 from "../../assets/latestprod5.svg";
import latestprod6 from "../../assets/latestprod6.svg";
import ProductBox from "./ProductBox";

function ProductAdd() {
  return (
    <div className="additional-product">
      <h2>Latest Products & Accessories</h2>
      <h5 className="additional-product-h5">
        From smartphones and smart homes, to voice assistants and other cool
        gadgets that make life easier.
      </h5>
      <button className="btn">Explore More</button>
      <div className="additional-product-container">
        <ProductBox
          image={latestprod1}
          header="Apple iPhones"
          price="From $495"
          content="Smartphone designed, developed and marketed by Apple Inc."
        />
        <ProductBox
          image={latestprod2}
          header="Apple iPads Pro"
          price="From $929"
          content="iPad Mini tablet computer produced and marketed by Apple Inc."
        />
        <ProductBox
          image={latestprod3}
          header="Apple MacBooks"
          price="From $929"
          content="Seventh-generation Intel Core processors."
        />
        <ProductBox
          image={latestprod4}
          header="Apple Airpods"
          price="From $129"
          content="Simply take them out and they’re ready to use with all your devices."
        />
        <ProductBox
          image={latestprod5}
          header="Apple Pencils"
          price="From $99"
          content="The new Apple Pencil takes that experience even further."
        />
        <ProductBox
          image={latestprod6}
          header="Apple Watches"
          price="From $399"
          content="Smartwatches designed and developed by Apple Inc."
        />
      </div>
    </div>
  );
}

export default ProductAdd;
