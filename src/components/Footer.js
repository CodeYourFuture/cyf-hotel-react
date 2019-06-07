import React from "react";
const footerContentArray = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
const Footer = props => (
  <ul>
    {props.footerContent.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
export { footerContentArray, Footer };
