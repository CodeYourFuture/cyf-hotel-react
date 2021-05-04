import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul>
        {props.info.map(function(item, index) {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
