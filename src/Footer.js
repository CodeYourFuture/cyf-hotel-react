import React from "react";

const Footer = (props) => {
  const element = props.array.map((element) => <li>{element}</li>);
  return <ul className="footer-list">{element}</ul>;
};

export default Footer;
