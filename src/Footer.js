import React from "react";
const footerInfo = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
const Footer = () => {
  return (
    <div className="footerMain">
      <ul className="footerUl">
        {footerInfo.map((x, index) => {
          return <li key={index}>{x}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
