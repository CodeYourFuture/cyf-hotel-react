import React from "react";

const Footer = contact => {
  return (
    <footer className="footer">
      <ul id="contact-details">
        {contact.details.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </footer>
  );
};
export default Footer;
