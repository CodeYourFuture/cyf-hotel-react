import React from "react";

const Footer = ({ footerInfo }) => {
  return (
    <ul className="footerList">
      {footerInfo.map((item, id) => (
        <li key={id}>{item}</li>
      ))}
    </ul>
  );
};
export default Footer;
