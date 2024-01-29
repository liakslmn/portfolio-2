import React from "react";
import "./Features.scss";
import iphonex from "../../assets/iphonex.svg";
import TextWrapper from "../TextWrapper/TextWrapper";

function FeaturesMore() {
  return (
    <div className="features-more">
      <p className="features-more-p">What we offer</p>
      <h2>Level-Up Your Design</h2>
      <h5>
        Huge trendy collection of web screens and components. Fully customized.
      </h5>
      <div className="button-wrapper">
        <button>Get Started</button>
        <button>Learn More</button>
      </div>
      <div className="media-container">
        <div className="features-left">
          <TextWrapper
            header="Pixel Perfect Design"
            content="This product will speed up your work in creating landing pages."
          />
          <TextWrapper
            header="Free Google Fonts"
            content="We used only time-tested technologies for the best results."
          />
        </div>
        <img src={iphonex} alt="" />
        <div className="features-right">
          <TextWrapper
            header="Modern & Bright Colors"
            content="At length one of them called out in a clear, polite, smooth dialect."
          />
          <TextWrapper
            header="Carefully Named Layers"
            content="At first, for some time, I was not able to answer him one word."
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturesMore;
