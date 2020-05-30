import React from "react";

const Footer = ({ footerData }) => {
  return (
    <ul className="bg-dark text-white-50 text-center list">
      {footerData.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Footer;
