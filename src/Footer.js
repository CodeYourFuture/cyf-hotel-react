import React from "react";
function Footer() {
  const footArray = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div>
      <ul>
        {footArray.map(el => (
          <li>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
