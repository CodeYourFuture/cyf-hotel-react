import React from "react";

const Footer = props => {
  return (
    <div>
      <ul>
        {props.footerInfo.map((info, index) => (
          <li key={index}>{info}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
