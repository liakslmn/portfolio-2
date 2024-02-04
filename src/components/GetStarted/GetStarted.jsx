import React from "react";
import "./GetStarted.scss";
import MediumBox from "./MediumBox";
import {
  faAppStore,
  faApple,
  faGooglePlay,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";

function GetStarted() {
  return (
    <div className="get-started">
      <p className="get-started-p">Get Started</p>
      <h2>Better landing for your startup</h2>
      <h5 className="get-started-h5">
        We have created a new product that will help designers, developers and
        companies create websites for their startups quickly and easily.
      </h5>
      <div className="medium-container">
        <MediumBox icon={faGooglePlay} content="Google Play" />
        <MediumBox icon={faApple} content="App Store" />
        <MediumBox icon={faWindows} content="Microsoft Store" />
      </div>
    </div>
  );
}

export default GetStarted;
