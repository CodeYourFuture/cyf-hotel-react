import React from "react";

const info = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const Footer = () => {
  return (
    <div className="container-fluid bg-secondary py-5 text-center text-light">
      <ul className="footer-list">
        {info.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
