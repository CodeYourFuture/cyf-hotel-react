import React from "react";
const Footer = props => {
  return (
    <div class="footer">
      <ul>
        {props.addresses.map(address => (
          <li>{address}</li>
        ))}
      </ul>
    </div>
  );
};
export default Footer;
