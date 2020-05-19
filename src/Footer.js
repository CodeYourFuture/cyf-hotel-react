import React from "react";

const Footer = props => {
  return (
    <div>
      <ul>
        {props.keys.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
