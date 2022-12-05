import React from "react";

const Footer = () => {
  const contacts = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <ul className="footer">
      {contacts.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default Footer;
