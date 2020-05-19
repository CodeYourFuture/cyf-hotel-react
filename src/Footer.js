import React from "react";

let footer = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        {footer.map((foot, index) => (
          <li key={index}>{foot}</li>
        ))}
      </ul>
    </footer>
  );
};
export default Footer;
