import React from "react";

const Footer = props => {
  return (
    <div className="address">
      <ul className="address-list">
        {props.addresses.map(address => (
          <li className="links">{address}</li>
        ))}
      </ul>
    </div>
  );
};
export default Footer;
