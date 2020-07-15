import React from "react";

const Footer = props => {
  return (
    <div className="footer">
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
