import React from "react";

const Footer = props => {
  return (
    <div className="bg-dark text-danger footer">
      <ul>
        {props.details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
