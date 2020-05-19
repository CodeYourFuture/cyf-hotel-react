import React from "react";
const Footer = props => {
  return (
    <ul className="footer  footer-list">
      {props.footerEls.map((element, index) => {
        return <li key={index}>{element}</li>;
      })}
    </ul>
  );
};

export default Footer;
