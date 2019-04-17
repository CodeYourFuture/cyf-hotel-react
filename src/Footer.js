import React from "react";
const Footer = props => {
  return (
    <ul>
      {props.footer.map((line, ix) => (
        <li key={ix}>{line}</li>
      ))}
    </ul>
  );
};

export default Footer;
