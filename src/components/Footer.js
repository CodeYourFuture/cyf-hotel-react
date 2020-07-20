import React from "react";
import "./Footer.css";

const Footer = props => {
  return (
    <footer className="app-footer">
      <ul>
        {props.contactDetails.map((contact, index) => {
          return <li key={index}>{contact}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
