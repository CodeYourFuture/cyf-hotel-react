import React from "react";

let footerInfo = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        {footerInfo.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
