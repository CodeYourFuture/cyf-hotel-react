import React from "react";
// import "./Footer.css";

const Footer = () => {
  const address = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];
  
  const currentDate = new Date().toLocaleDateString();
  return (
    <ul className="address">
      {address.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      <li className="span">
        <span>Today is: {currentDate}</span>
      </li>
    </ul>
  );
};
export default Footer;
