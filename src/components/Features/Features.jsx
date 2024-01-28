import React from "react";
import "./Features.scss";
import {
  faCode,
  faPaintBrush,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import FeaturesBox from "./FeaturesBox";

function Features() {
  return (
    <div className="features">
      <p className="features-p">Our Features</p>
      <h2>What’s New in BleakTech?</h2>
      <h5>
        We have created a new product that will help designers, developers and
        companies create websites for their startups quickly and easily.
      </h5>
      <div className="features-container">
        <FeaturesBox
          icon={faPaintBrush}
          header="New Design"
          content="Carefully crafted precise design, with harmonious typography and perfect padding around every component."
        />
        <FeaturesBox
          icon={faCode}
          header="New Code"
          content="Built with HTML, CSS and JS. Startup’s code is easy to understand and easy to change. No other frameworks needed."
        />
        <FeaturesBox
          icon={faToggleOn}
          header="New Character"
          content="Transform your ideas into reality and launch a beautiful site with minimal frustration."
        />
      </div>
    </div>
  );
}

export default Features;
