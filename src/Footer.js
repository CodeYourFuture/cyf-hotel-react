import React from "react";

const Footer = ({ addresses }) => {
  return (
    <footer>
      <ul>
        {addresses.map((address, index) => (
          <li key={index}>{address}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
