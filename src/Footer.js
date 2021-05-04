import React from "react";

const Footer = props => {
  return (
    <div>
      <ul>
        {props.contactInfo.map((call, email) => {
          return <li contactInfo={email}>{call}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
