import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <p>Contact Us</p>
      <ul>
        {props.data.map((address, index) => {
          return <li key={index}>{address}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
