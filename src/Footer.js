import React from "react";

const Footer = props => {
  return (
    <div>
      <ul>
        {props.contactDetails.map(detail => (
          <li>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
