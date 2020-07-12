import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.FooterArray.map((footerInfo, index) => {
        return <li key={index}>{footerInfo}</li>;
      })}
    </ul>
  );
};

export default Footer;
