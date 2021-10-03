import React from "react";
const Footer = prop => {
  const hotelInfo = prop.hotelContact;
  return (
    <ul>
      {hotelInfo.map((info, index) => (
        <li key={index}>{info}</li>
      ))}
    </ul>
  );
};

export default Footer;
