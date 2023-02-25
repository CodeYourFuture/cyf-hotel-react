import React from "react";


function Footer(hotel) {
  const FooterArray = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];
  const [Address, Email, PhoneNumber] = FooterArray;
  return (
    <ul>
      <li>{Address}</li>
      <li>{Email}</li>
      <li>{PhoneNumber}</li>
    </ul>
  );
}

export default Footer;