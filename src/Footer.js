import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul className="footer-content">
        {props.footerData.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
