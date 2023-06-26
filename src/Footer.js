import React from "react";

const Footer = ({ array }) => {
  return (
    <div className="Footer">
      <ul>
        {array.map(item => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;