import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul>
        {props.contact.map((address, index) => (
          <li key={index}> {address} </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
