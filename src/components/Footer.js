import React from "react";

function Footer() {
  const HotelContact = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  return (
    <footer>
      <ul>
        {HotelContact.map((adress, i) => (
          <li key={i}>{adress}</li>
        ))}
        ;
      </ul>
    </footer>
  );
}

export default Footer;
