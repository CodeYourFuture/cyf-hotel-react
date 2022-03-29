import React from "react";
import "./footer.css";

const Footer = ({ contact }) => {
  return (
    <ul className="appFooter">
      {contact.map((data, index) => {
        return <li key={index}>{data}</li>;
      })}
    </ul>
  );
};

export default Footer;
