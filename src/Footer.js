import React from "react";

const Footer = props => {
  let liArray = props.myArray.map(element => (
    <li className="footer-items">{element}</li>
  ));
  return <ul className="footer">{liArray}</ul>;
};

export default Footer;
