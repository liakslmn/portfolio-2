import React from "react";
import "./Clients.scss";
import azendoo from "../../assets/Azendoo.svg";
import Beanstalk from "../../assets/Beanstalk.svg";
import CNN from "../../assets/CNN.svg";
import Pepsi from "../../assets/Pepsi.svg";
import Philips from "../../assets/Philips.svg";
import Pizza_Hut from "../../assets/Pizza Hut.svg";
import Starbucks from "../../assets/Starbucks.svg";
import Walmart from "../../assets/Walmart.svg";

function Clients() {
  return (
    <div className="clients">
      <p>Our Clients</p>
      <h2>Trusted by over 500 great businesses</h2>
      <h5>
        Startup Framework includes great form options for your startup projects.
        Each component is coded for web which makes creating a website quick and
        easy.
      </h5>
      <div className="client-wrapper">
        <div className="client-box">
          <img src={Starbucks} alt="" />
        </div>
        <div className="client-box">
          <img src={Pepsi} alt="" />
        </div>
        <div className="client-box">
          <img src={Walmart} alt="" />
        </div>
        <div className="client-box">
          <img src={azendoo} alt="" />
        </div>
        <div className="client-box">
          <img src={CNN} alt="" />
        </div>
        <div className="client-box">
          <img src={Philips} alt="" />
        </div>
        <div className="client-box">
          <img src={Pizza_Hut} alt="" />
        </div>
        <div className="client-box">
          <img src={Beanstalk} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Clients;
