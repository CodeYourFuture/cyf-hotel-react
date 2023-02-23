import React from "react";

const Footer = props => {
  return (
    <ul className="footer">
      {props.footerArray.map((obj, index) => {
        return <li key={index}> {obj}</li>;
      })}
    </ul>
  );
};

export default Footer;
