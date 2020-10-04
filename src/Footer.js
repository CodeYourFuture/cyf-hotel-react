import React from "react";
const Footer = () => {
  let footerEls = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <ul className="footer  footer-list">
      {footerEls.map((element, index) => {
        return <li key={index}>{element}</li>;
      })}
    </ul>
  );
};

export default Footer;
