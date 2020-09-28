import React from "react";

const Footer = ({ info }) => {
  return (
    <footer>
      <ul>
        {info.map((infoItem, index) => (
          <li key={index}>{infoItem}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
