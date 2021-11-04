import React from "react";
const Footer = ({ hotelContact }) => {
  const hotelInfo = hotelContact;
  return (
    <ul>
      {hotelInfo.map((info, index) => (
        <li key={index}>{info}</li>
      ))}
    </ul>
  );
};

export default Footer;
