import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul className="footer__text">
        {props.contactInfo.map((info, index) => (
          <li key={index}>{info}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
