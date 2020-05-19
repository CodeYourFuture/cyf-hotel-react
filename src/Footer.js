import React from "react";
// const footerProps = [
//   "123 Fake Street, London, E1 4UD",
//   "hello@fakehotel.com",
//   "0123 456789",
// ];
const Footer = props => {
  return (
    <ul>
      {props.footerProps.map((name, index) => {
        return <li key={index}>{name}</li>;
      })}
    </ul>
  );
};

export default Footer;
