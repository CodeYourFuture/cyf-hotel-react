import React from "react";
const Footer = prop => {
  const hotelInfo = prop.hotelContact;
  return (
    <ul>
      {hotelInfo.map(info => (
        <li>{info}</li>
      ))}
    </ul>
  );
};

export default Footer;
