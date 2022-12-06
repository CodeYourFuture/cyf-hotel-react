import React from "react";
const Footer = props => {
  return (
    <div>
      <ul className="footer-items">
        {props.footerComponents.map((component, index) => (
          <li key={index}>{component}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
