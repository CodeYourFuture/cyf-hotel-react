import React from "react";

const Footer = () => {
  let information = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <ul className="footer">
      {information.map((el, index) => {
        return <li key={index}>{el}</li>;
      })}
    </ul>
  );
};

export default Footer;
