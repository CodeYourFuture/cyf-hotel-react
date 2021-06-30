import React from "react";

const Footer = props => {
  return (
    <div>
      <ul>
        {props.Address.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
