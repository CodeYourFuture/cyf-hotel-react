import React from "react";

const Footer = ({ array }) => {
  return (
    <div className="Footer">
      <ul>
        {array.map(item => {
          return (
            <ul>
              <li>{item}</li>
            </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
