import React from "react";
import "./Hero.scss";
import macbook_pro from "../../assets/macbook-pro.svg";

function Hero() {
  return (
    <div className="hero">
      <h2>A high-quality solution startup website quickly</h2>
      <button>Get Started</button>
      <img src={macbook_pro} alt="" />
      <div className="text-container">
        <p className="text">
          Startup Framework works on devices supporting Retina Display. Feel the
          clarity in each pixel.
        </p>
        <p className="text">
          There are a lot of different components that will help you create the
          perfect look and feel for your startup.
        </p>
        <p className="text">
          You can easily combine components in a variety ways for different
          design projects. It’s easy!
        </p>
      </div>
    </div>
  );
}

export default Hero;
