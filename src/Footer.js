import React from "react";

const Footer = props => {
  return (
    <footer>
      <ul>
        {props.contactDetails.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
