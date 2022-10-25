import React from "react";

const addresses = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const loop = addresses.map(address => {
  return <li>{address}</li>;
});

function Footer() {
  return (
    <footer className="footer">
      <ul>{loop}</ul>
    </footer>
  );
}

export default Footer;
