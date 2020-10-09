import React from "react";

// let info = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];

const Footer = ({ info }) => (
  <footer>
    <ul>
      {info.map((item, id) => (
        <li key={id}>{item}</li>
      ))}
    </ul>
  </footer>
);
export default Footer;
