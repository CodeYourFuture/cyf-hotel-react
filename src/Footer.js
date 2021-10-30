import React from "react";

const Footer = props => {
  return (
    <footer className="footer">
      <ul>
        {props.footerDetails.map((details, index) => (
          <li key={index}>{details}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
