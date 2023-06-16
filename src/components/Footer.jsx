import React from "react";

const Footer = ({ contactInfo }) => {
  return (
    <footer>
      <ul>
        {contactInfo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
