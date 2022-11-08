import React from "react";

const addressDetails = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const Footer = () => {
  return (
    <ul className="footer">
      {addressDetails.map((element, index) => {
        return <li key={index}>{element}</li>;
      })}
    </ul>
  );
};

export default Footer;
