import React from "react";

const Footer = props => {
  return (
    <footer>
      <ul>
        {props.contacts.map(item => {
          return <li>{item}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
