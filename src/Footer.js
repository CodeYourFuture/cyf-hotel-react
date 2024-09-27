import React from "react";

const Footer = () => {
  let address = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div>
      <ul>
        {address.map(item => {
          return <li key={item
          }>{item}</li>;

        })}
      </ul>
    </div>
  );
};

export default Footer;