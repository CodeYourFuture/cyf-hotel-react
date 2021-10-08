import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <p>Contact Info</p>
      <ul>
        {props.contactInfo.map(info => {
          return <li key={info}>{info}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
