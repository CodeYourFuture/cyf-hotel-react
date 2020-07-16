import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.contactDetails.map((contact, index) => {
        return <li key={index}>{contact}</li>;
      })}
    </ul>
  );
};

export default Footer;
