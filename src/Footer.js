import React from "react";

const Footer = props => {
  return (
    <div className="address">
      <ul className="address-list">
        {props.addresses.map((address, i) => (
          <li className="links" key={i}>
            {address}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Footer;
