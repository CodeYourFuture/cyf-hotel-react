import React from "react";
import "./App.css";

const Footer = () => {
  const addresses = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="footer">
      <ul>
        {addresses.map((address, index) => (
          <h5 key={index}>{address}</h5>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
