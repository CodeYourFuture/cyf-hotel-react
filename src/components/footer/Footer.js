import React from "react";

const Footer = ({ footerInfo }) => {
  return (
    <div className="footer">
      <ul className="footer-list">
        {footerInfo.map((address, index) => {
          return <li key={index}>{address}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
