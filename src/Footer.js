import React from "react";

const Footer = props => {
  return (
    <ul className="footer">
      {props.footerInfo.map(footerInfo => {
        return <li>{footerInfo}</li>;
      })}
    </ul>
  );
};

export default Footer;
