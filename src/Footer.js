import React from "react";

function Footer() {
  const array = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 "
  ];
  return (
    <ul>
      {array.map(name => {
        return <li>{name}</li>;
      })}
    </ul>
  );
}
export default Footer;
