import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul>
        {props.address.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
