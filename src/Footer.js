import React from "react";
const Footer = props => {
  return (
    <ul>
      {props.footer.map(line => (
        <li>{line}</li>
      ))}
    </ul>
  );
};

export default Footer;
