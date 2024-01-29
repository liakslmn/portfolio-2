import React from "react";
import "./Advantages.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AdvantagesBox({ icon, header, content }) {
  return (
    <div className="advantages-box">
      <FontAwesomeIcon icon={icon} className="icon" />
      <h5>{header}</h5>
      <p>{content}</p>
    </div>
  );
}

export default AdvantagesBox;
