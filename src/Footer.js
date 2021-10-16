import React from "react";

let arrayOfDetails = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

function Footer(props) {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        {arrayOfDetails.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
