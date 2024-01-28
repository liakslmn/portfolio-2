import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Features.scss";

function FeaturesBox({ icon, header, content }) {
  return (
    <div className="features-box">
      <FontAwesomeIcon icon={icon} className="icon" />
      <h6>{header}</h6>
      <p>{content}</p>
    </div>
  );
}

export default FeaturesBox;
