import React from "react";

const Footer = props => {
  return (
    <div className="Footer">
      <ul>
        {props.address.map(data => (
          <li>{data}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
