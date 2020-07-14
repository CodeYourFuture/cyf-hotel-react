import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul>
        {props.prop.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
