import React from "react";
const Footer = props => {
  return (
    <>
      <ul>
        {props.address.map(add => (
          <li>{add}</li>
        ))}
      </ul>
    </>
  );
};

export default Footer;
