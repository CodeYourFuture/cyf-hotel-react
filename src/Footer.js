import React from "react";
const Footer = () => {
  const address = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <ul className="footer">
      {address.map(e => (
        <li key={e}>{e}</li>
      ))}
    </ul>
  );
};
export default Footer;
