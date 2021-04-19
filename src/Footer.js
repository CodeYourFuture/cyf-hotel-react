import React from "react";

const Footer = props => {
  return (
    <div>
      <ul>
        {props.addresses.map((address, index) => {
          return <li key={index}>{address}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
