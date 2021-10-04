import React from "react";

const footerInfo = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const Footer = () => {
  return (
    <ul className="footer">
      {footerInfo.map(info => (
        <li>{info}</li>
      ))}
    </ul>
  );
};

export default Footer;
