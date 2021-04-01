import React from "react";

const Footer = props => {
  return (
    <div>
      <ul>
        {props.cityMap.map((cityAddress, index) => (
          <li key={index}>{cityAddress}</li>
        ))}
      </ul>
    </div>
  );
};
export default Footer;

// `["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]`;
