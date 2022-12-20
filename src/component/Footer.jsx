import React from "react";

function Footer() {
  const props = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div>
      <ul>
        {props.map(prop => (
          <li key={prop} className="footer">
            {" "}
            {prop}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
