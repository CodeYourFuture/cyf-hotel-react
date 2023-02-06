import React from "react";

const Footer = ({ footerInformation }) => {
  return (
    <ul className="footer">
      {footerInformation.map((info, number) => {
        return <li key={number}>{info}</li>;
      })}
    </ul>
  );
};

export default Footer;
