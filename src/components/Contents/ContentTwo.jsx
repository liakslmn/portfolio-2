import React from "react";
import "./Content.scss";
import {
  tableHeader,
  tableContent1,
  tableContent2,
  tableContent3,
  tableContent4,
  tableContent5,
} from "../../assets/headerList";

function ContentTwo() {
  return (
    <div className="content-two">
      <p>Our Plan</p>
      <h2>Pay as you go</h2>
      <div className="table-container">
        <table>
          <tr>
            {tableHeader.map((item, i) => {
              return <th key={i}>{item}</th>;
            })}
          </tr>
          <tr>
            {tableContent1.map((item, i) => {
              return <td key={i}>{item}</td>;
            })}
          </tr>
          <tr>
            {tableContent2.map((item, i) => {
              return <td key={i}>{item}</td>;
            })}
          </tr>
          <tr>
            {tableContent3.map((item, i) => {
              return <td key={i}>{item}</td>;
            })}
          </tr>
          <tr>
            {tableContent4.map((item, i) => {
              return <td key={i}>{item}</td>;
            })}
          </tr>
          <tr>
            {tableContent5.map((item, i) => {
              return <td key={i}>{item}</td>;
            })}
          </tr>
        </table>
        <div className="learn-more-wrapper">
          <div className="learn-more">
            <h4>Easy Start</h4>
            <p>
              To get started, you select the desired sample and base the entire
              website on it. It’s that simple!
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentTwo;
