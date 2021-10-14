import React from "react";

const Footer = props => {
  return (
    <footer>
      <ul>
        {props.footerContent.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
