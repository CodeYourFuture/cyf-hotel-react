import React from "react";

const Footer = ({ array }) => {
  let liArray = array.map(element => <li>{element}</li>);
  return <ul>{liArray}</ul>;
};

export default Footer;
