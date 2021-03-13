import React from "react";
const Footer = props => {
  return (
    <ul className="footer">
      {props.contact.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
      ;
    </ul>
  );
};

export default Footer;
