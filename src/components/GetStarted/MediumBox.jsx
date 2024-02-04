import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function MediumBox({ icon, content }) {
  return (
    <div className="medium-box">
      <FontAwesomeIcon icon={icon} className="medium-box-icon" />
      <h5>{content}</h5>
      <button className="medium-box-button">Download Now</button>
    </div>
  );
}

export default MediumBox;
