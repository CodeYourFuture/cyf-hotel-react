import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul>
        {props.footerDetails.map((details, index) => (
          <li key={index}>{details}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
