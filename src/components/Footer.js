import React from "react";

const Footer = props => {
  const { footerArray } = props; //new property
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
