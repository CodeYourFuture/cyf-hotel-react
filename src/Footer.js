import React from "react";

const Footer = props => {
  const addresses = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="footer">
      <ul>
        {addresses.map(add => {
          return <li key={add}>{add}</li>;
        })}
        ;
      </ul>
    </div>
  );
};
export default Footer;
