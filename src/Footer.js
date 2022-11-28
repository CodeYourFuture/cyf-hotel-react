import React from "react";

const Footer = ({ array }) => {
  return (
    <div className="Footer">
      <ul>
        {array.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
