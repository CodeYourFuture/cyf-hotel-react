import React from "react";

const Footer = props => {
  return (
    <div className="footer-container">
      <ul>
        {props.info.map(info => (
          <li>{info}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
