import React from "react";
const Footer = ({ props }) => {
  return (
    <ul className="footer">
      {props.map(El => (
        <li className="footerItem">{El}</li>
      ))}
    </ul>
  );
};
export default Footer;
