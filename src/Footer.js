import React from "react";

const info = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        {info.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
