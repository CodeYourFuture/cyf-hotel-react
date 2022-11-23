import React from "react";
import './App.css'

const Footer = () => {
  let names = [
    "123 Fake Street",
    "London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="navbar">
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
