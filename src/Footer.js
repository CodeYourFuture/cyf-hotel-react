import React from "react";
const address = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
function Footer() {
  return address.map(address => {
    return (
      <ul className="FooterList">
        <li>{address}</li>
      </ul>
    );
  });
}

export default Footer;
