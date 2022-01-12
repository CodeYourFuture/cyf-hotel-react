import React from "react";
const Footer = props => {
  return (
    <footer>
      <ul>
        {props.footerDetails.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
