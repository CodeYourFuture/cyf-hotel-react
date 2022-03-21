import React from "react";

const Footer = prop => {
  prop = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="footer">
      <ul>
        {prop.map(el => {
          return <li>{`${el}`}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
