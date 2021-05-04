import React from "react";

const Footer = props => {
  return (
    <footer>
      <hr />
      <ul>
        {props.contact.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
