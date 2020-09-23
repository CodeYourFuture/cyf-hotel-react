import React from "react";

const Footer = props => {
  return props.myArr.map(item => {
    return <li>{item}</li>;
  });
};

export default Footer;
