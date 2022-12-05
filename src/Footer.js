import React from "react";

const Footer = ({ footerInformation }) => {
  console.log(footerInformation);
  return (
    <ul className="footer">
      {footerInformation.map((info, index) => {
        return <li key={index}>{info}</li>;
      })}
    </ul>
  );
};

export default Footer;
