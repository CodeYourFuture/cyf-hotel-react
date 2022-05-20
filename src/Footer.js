import React from "react";
import "./App.css";

const data = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const Footer = () => (
  <footer className="footer">
    <ul className="list-group">
      <li className="list-group-item text-white btn-success h4">Contact us</li>
      {data.map((text, index) => (
        <li key={index} className="list-group-item">
          {text}
        </li>
      ))}
    </ul>
  </footer>
);

export default Footer;
