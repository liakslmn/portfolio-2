import React, { useState } from "react";
import "./Header.scss";
import { headerList } from "../../assets/headerList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const stickyHeader = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", stickyHeader);
  return (
    <>
      <div className={sticky ? "header sticky" : "header"}>
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
          <FontAwesomeIcon
            icon={faBars}
            className="hamburger-menu"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
      </div>
      <div className={`menu-mobile ${isOpen ? "show" : ""}`}>
        <ul>
          {headerList.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
