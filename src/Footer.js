import React from "react";

const Footer = props => {
  let liArray = props.myArray.map((element, index) => (
    <li className="footer-items" key={index}>
      {element}
    </li>
  ));
  return <ul className="footer">{liArray}</ul>;
};

export default Footer;
