import React from "react";

const Footer = props => {
  const addresses = props.address;
  const mainAddress = addresses.map((info, index) => (
    <li key={index}>{info}</li>
  ));
  return <ul className="footer">{mainAddress}</ul>;
};

export default Footer;
