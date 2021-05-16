import React from "react";
import "./Footer.css";

const Footer = props => {
  return (
    <footer className="footer">
      <ul>
        {props.footerDetails.map((details, index) => (
          <li key={index}>{details}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
