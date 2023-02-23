import React from "react";

const Footer = props => {
  return (
    <ul className="footer">
      {props.array.map(prop => (
        <li key={prop}>{prop}</li>
      ))}
    </ul>
  );
};

export default Footer;
