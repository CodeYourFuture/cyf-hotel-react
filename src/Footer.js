import React from "react";

const Footer = (props) => {
  return (
    <ul className="footer">
      {props.contents.map((content, index) => (
        <li key={index}>{content}</li>
      ))}
    </ul>
  );
};

export default Footer;
