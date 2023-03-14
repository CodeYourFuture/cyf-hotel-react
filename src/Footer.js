import React from "react";

const Footer = props => {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <ul>
        {props.contact.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
