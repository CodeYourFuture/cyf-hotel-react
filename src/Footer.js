import React from "react";

const Footer = props => {
  return (
    <div>
      <ul>
        {props.addressArray.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
