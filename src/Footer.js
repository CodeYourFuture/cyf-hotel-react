import React from "react";

// destructuring props
function Footer({ address, email, telephone }) {
  return (
    <footer>
      <ul>
        <li key={address}>{address}</li>
        <li key={email}>{email}</li>
        <li key={telephone}>{telephone}</li>
      </ul>
    </footer>
  );
}

export default Footer;
