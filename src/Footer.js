import React from "react";

const Footer = props => {
  return (
    <div>
      <ul>
        {props.contact.map(address => (
          <li>{address}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
