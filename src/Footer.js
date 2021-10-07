import React from "react";

const addressHotel = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const Footer = props => {
  return (
    <footer>
      <ul>
        {addressHotel.map(address => (
          <li key={address}>{address}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
