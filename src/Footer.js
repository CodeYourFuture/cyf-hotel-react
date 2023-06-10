import "./Footer.css";
import React from "react";

// destructuring props
function Footer({ address, email, telephone }) {
  return (
    <footer className="footer">
      <ul className="contact-details">
        <li key={address}>{address}</li>
        <li key={email}>{email}</li>
        <li key={telephone}>{telephone}</li>
      </ul>
    </footer>
  );
}

export default Footer;
