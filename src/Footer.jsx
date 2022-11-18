import React from "react";

function Footer() {
  const address = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div>
      <ul className="address">
        {address.map((name, index) => (
          <li key={index}> {name} </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
