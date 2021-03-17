import React from "react";

const Footer = props => {
  return (
    <div>
      <ul>
        {props.contactDetail.map((elem, index) => (
          <li key={index}>{elem}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
