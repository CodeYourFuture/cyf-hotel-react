import React from "react";
import "./Footer.css";

const Footer = () => {
  const address = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="footer">
      <ul>
        {address.map((addres, index) => (
          <h6 key={index}>{addres}</h6>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
