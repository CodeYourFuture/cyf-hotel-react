import React from "react";

const Footer = ({ footerArray }) => {
  return (
    <div className="footer">
      <ul>
        {footerArray.map((footerItems, index) => (
          <li key={index}>{footerItems}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
