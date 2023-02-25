import React from "react";
let footerProp = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789",
];

const Footer = () => {
  return (
    <ul className="footer">
      {footerProp.map((element) => (
        <li key={element}>{element}</li>
      ))}
    </ul>
  );
};
export default Footer;
