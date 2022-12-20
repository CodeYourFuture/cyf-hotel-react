import React from "react";

const Footerarry = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const Footer = () => {
  return (
    <div>
      <ul className="footer-style">
        {Footerarry.map((Element, index) => {
          return <li key={index}>{Element}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
