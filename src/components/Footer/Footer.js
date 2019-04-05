import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.details.map(data => {
        return <li>{data}</li>;
      })}
    </ul>
  );
};
export default Footer;
