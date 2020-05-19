import React from "react";

const Footer = props => {
  return (
    <ul className="bg-dark text-white-50 text-center list">
      {props.list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Footer;
