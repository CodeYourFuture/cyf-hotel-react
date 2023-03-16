import React from "react";

const Footer = (props) => {
  return (
    <ul className="contact-container">
      {props.contact.map((list, index) => {
        return <li key={index}>{list}</li>;
      })}
    </ul>
  );
};

export default Footer;
