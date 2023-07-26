import React from "react";

const Footer = (props) => (
  <ul>
    {props.addressDetail.map((addressLine, index) => {
      return (
        <li key={index}>{addressLine}</li>
      )
    })}
  </ul>
);

export default Footer;