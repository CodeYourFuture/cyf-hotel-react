import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.footerData.map(data => (
        <li key={data}>{data}</li>
      ))}
    </ul>
  );
};

export default Footer;
