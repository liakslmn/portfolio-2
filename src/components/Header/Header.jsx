import React from "react";
import "./Header.scss";
import { headerList } from "../../assets/headerList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <FontAwesomeIcon icon={faHeadphonesAlt} className="header-logo" />
        {/* <h3>BleakTech Inc.</h3> */}
      </div>
      <div className="menu">
        <ul>
          {headerList.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
        <FontAwesomeIcon icon={faBars} className="hamburger-menu" />
      </div>
    </div>
  );
}

export default Header;
