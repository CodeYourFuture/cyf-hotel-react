import React from "react";

const Footer = props => {
  return (
    <footer className="footer">
      <ul>
        {props.contactInfo.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
