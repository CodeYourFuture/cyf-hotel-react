import React from "react";

const contactInfo = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
function Footer() {
  return (
    <footer>
      <ul>
        {contactInfo.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
