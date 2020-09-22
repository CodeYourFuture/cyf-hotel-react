import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul className="footer-list">
        {props.info.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
