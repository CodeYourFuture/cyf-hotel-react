import React from "react";

function Footer() {
  const address = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div>
      <ul>
        {address.map(x => {
          return <li>{x}</li>;
        })}
      </ul>
    </div>
  );
}

export default Footer;
