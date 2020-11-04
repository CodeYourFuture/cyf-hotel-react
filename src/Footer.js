import React from "react";

const Footer = () => {
  const footerArray = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <>
      <ul>
        {footerArray.map(name => (
          <li>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default Footer;
