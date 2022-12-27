import React from "react";

const Footer = props => {
  return (
    <div>
      <ul>
        {props.footArray.map(val => {
          return <li>{val}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
