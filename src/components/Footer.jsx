import React from "react";

const Footer = ({ footerInfo }) => {
  return (
    <footer>
      <ul>
        {footerInfo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
