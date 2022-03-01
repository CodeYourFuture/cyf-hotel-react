import React from "react";

const Footer = ({ address }) => {
  return (
    <div className="footer">
      <ul>
        {address.map((addr, index) => (
          <li key={index}>{addr}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
