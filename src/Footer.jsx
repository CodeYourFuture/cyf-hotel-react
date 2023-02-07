import React from "react";

const Footer = ({ footerArray }) => {
  return (
    <ul className="footer">
      {footerArray.map((obj, index) => {
        return <li key={index}> {obj}</li>;
      })}
    </ul>
  );
};

export default Footer;
