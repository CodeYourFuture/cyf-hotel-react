import React from "react";

const Footer = (props) => {
  return (
    <div>
      <h4 className="footer-title">Address and Contact Details</h4>
      <ul className="footer-details">
        {props.details.map((info) => (
          <li>{info}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
