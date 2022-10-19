import React from "react";

const Footer = props => {
  return (
    <div className="Footer-block">
      <ul className="UnorderedList">
        {props.FooterData.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
