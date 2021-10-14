import React from "react";
const Footer = props => {
  return (
    <ul className="footer">
      {props.items.map((item, index) => (
        <li key={index}> {item} </li>
      ))}
    </ul>
  );
};
export default Footer;
