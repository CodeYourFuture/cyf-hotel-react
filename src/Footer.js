import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul>
        {props.contact.map(string => {
          return <li>{string}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
