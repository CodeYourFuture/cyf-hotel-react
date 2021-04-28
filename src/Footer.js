import React from "react";
import "./Footer.css";

const Footer = () => {
  const footerDetails = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <footer>
      <ul>
        {footerDetails.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
