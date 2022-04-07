import React from "react";

const Footer = props => {
  return (
    <footer className="footer">
      <ul>
        {props.contact.map(string => (
          <li>{string}</li>
        ))}
        ;
      </ul>
    </footer>
  );
};

export default Footer;
