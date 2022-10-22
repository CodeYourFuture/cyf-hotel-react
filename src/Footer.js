import React from "react";

const Footer = props => {
  return (
    <ul className="address">
      {props.details.map(detail => (
        <li key={detail}> {detail} </li>
      ))}
    </ul>
  );
};
export default Footer;
