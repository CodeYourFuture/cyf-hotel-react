import React from "react";

const Footer = ({ address }) => {
  return (
    <footer>
      <ul>
        {address.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;