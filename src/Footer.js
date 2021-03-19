import React from "react";

export const Footer = props => {
  return (
    <div>
      <ul id="footer-address">
        Address:
        {props.address.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
