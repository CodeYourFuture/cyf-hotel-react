import React from "react";

const data = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const Footer = () => (
  <footer className="footer">
    <ul className="list-group">
      <a class="footer-btn">Contact us</a>

      {data.map((text, index) => (
        <li key={index} className="list-items">
          {text}
        </li>
      ))}
    </ul>
  </footer>
);

export default Footer;
