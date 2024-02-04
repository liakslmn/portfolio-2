import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";
import { footerMenuOne, footerMenuTwo } from "../../assets/footer";
import {
  faFacebook,
  faGooglePlus,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="left-segment">
          <div className="logo">
            <FontAwesomeIcon icon={faHeadphonesAlt} className="header-logo" />
            <h3>BleakTech Inc.</h3>
          </div>
          <h5>
            Be sure to take a look at our Terms of Use and Privacy Policy.
          </h5>
        </div>
        <div className="right-segment">
          <div className="list">
            <p>About</p>
            <ul>
              {footerMenuOne.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="list">
            <p>Company</p>
            <ul>
              {footerMenuTwo.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="subscribe">
            <p>Subscribe to our Newsletters</p>
            <div className="form">
              <input type="text" />
              <button type="submit">Subscribe</button>
            </div>
            <div className="icon-list">
              <FontAwesomeIcon
                icon={faTwitter}
                className="icon-list-logo twitter"
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="icon-list-logo facebook"
              />
              <FontAwesomeIcon
                icon={faGooglePlus}
                className="icon-list-logo google-plus"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="copyright">
        Copyright © 2024 BleakTech Inc. All rights reserved.
      </p>
    </>
  );
}

export default Footer;
