import React from "react";

const Footer = prop => {
  return (
    <ul>
      {prop.props.map((v, i) => (
        <li key={i}>{v}</li>
      ))}
    </ul>
  );
};

export default Footer;
