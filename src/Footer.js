import React from "react";

const Footer = prop => {
  return (
    <footer>
      <ul>
        <h3>Contact Information</h3>
        {prop.Contact.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </footer>
  );
};
export default Footer;
