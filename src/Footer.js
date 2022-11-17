import React from "react";

let footer = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

function Footer() {
  return (
    <div className="Footer">
      <h4>Contact us</h4>
      <ul>
        {footer.map(line => (
          <li>{line}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
