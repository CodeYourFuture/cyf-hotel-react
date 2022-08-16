import React from "react";

const Footer = props => {
  return (
    <footer className="footer-container">
      <ul className="footer-contact">
        {props.contactDetails.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
