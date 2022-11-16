import React from "react";
const Footer = ({ address }) => {
  return (
    <footer className="footer">
      <ul>
        {address.map((location, index) => (
          <li key={index}> {location}</li>
        ))}
      </ul>
    </footer>
  );
};
export default Footer;
