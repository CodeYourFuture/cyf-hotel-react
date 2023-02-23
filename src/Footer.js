import React from "react";
const Footer = props => {
  return (
    <ul className="footer">
      {props.data.map((item, index) => (
        <li key={index} className="li">
          {item}
        </li>
      ))}
    </ul>
  );
};
export default Footer;
