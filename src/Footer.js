import React from "react";

const Footer = (props) => {
  return (
    <ul className="footer-list">
      {props.array.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  );
};

export default Footer;
