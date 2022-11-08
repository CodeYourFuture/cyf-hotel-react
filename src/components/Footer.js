import React from "react";

const Footer = ({ contacts }) => {
  return (
    <div className="container">
      <ul>
        {contacts.map(item => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
