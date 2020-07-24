import React from "react";
import "./Footer.css";

const Footer = props => {
  return (
    <div className="app-footer">
      <ul className="flex">
        {props.FooterArray.map((footerInfo, index) => {
          return (
            <li className="footerElement" key={index}>
              {footerInfo}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
