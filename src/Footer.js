import React from "react";
import "./Footer.css";

const Footer = ({ address }) => {
  return (
    <ul className="footer">
      {address.map((add, index) => {
        return <li key={index}> {add}</li>;
      })}
    </ul>
  );
};

export default Footer;
