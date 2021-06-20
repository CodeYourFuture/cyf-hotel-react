import React from "react";
import address from "./Address";

const Footer = () => {
  return (
    <ul className="footer">
      {address.map((props, index) => {
        return <li key={index}>{props}</li>;
      })}
    </ul>
  );
};

export default Footer;
