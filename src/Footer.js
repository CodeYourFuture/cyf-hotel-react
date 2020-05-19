import React from "react";
const address = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
const Footer = () => {
  return (
    <div>
      <ul>
        {address.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
