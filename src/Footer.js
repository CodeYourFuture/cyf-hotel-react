import React from "react";

const Footer = ({ FooterData }) => {
  return (
    <div className="Footer-block">
      <ul className="UnorderedList">
        {FooterData.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
