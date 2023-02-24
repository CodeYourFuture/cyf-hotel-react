import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <ul>
        {props.props.map((prop) => (
          <li key={prop}>{prop}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
