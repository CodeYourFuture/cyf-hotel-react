import React from "react";

const Footer = ({ adress }) => {
  console.log(adress);
  return (
    <ul>
      {adress.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default Footer;
