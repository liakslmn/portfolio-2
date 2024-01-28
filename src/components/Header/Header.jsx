import React from "react";
import "./Header.scss";
import { headerList } from "../../assets/headerList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphonesAlt,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

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
          <li>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mag-glass" />
          </li>
        </ul>
      </div>
      <div className="login-signup">
        <ul>
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
