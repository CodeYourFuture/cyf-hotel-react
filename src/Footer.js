import React from "react";

const Footer = props => {
  return (
    <ul className="footer-info">
      {props.contact.map((contactDetail, index) => (
        <li key={index}>{contactDetail}</li>
      ))}
    </ul>
  );
};

export default Footer;
