import React from "react";

const details = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const Footer = () => {
  return (
    <ul>
      {details.map(data => {
        return <li>{data}</li>;
      })}
    </ul>
  );
};
export default Footer;
