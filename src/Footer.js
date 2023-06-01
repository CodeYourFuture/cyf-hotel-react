import React from "react";


function Footer(hotel) {
  const FooterArray = [
    "Hotel le CYF",
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];
  const [Name, Address, Email, PhoneNumber] = FooterArray;
  return (
    <ul className="footer">
      <li>{Name}</li>
      <li>{Address}</li>
      <li>{Email}</li>
      <li>{PhoneNumber}</li>
    </ul>
  );
}

export default Footer;