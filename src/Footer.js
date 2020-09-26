import React from "react";

const Footer = () => {
  const address = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <ul>
      {address.map(add => (
        <li>{add}</li>
      ))}
    </ul>
  );
};

export default Footer;
