import React from "react";
import "./TextWrapper.scss";

function TextWrapper({ header, content }) {
  return (
    <div className="text-wrapper">
      <h6>{header}</h6>
      <p>{content}</p>
    </div>
  );
}

export default TextWrapper;
