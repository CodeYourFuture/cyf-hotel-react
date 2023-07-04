import React from "react";
let Properties = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789",
];
const Footer = () => {
  return (
    <ul className="footer">
      {
        Properties.map(property => (<li key={property}>{property}</li>))
      }
    </ul> 
  );
}

export default Footer;