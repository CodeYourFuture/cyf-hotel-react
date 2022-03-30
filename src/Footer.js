import React from "react";

const Footer = props => {
  return (
    <ul className="footer">
      {props.contact.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Footer;
