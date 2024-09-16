import React from "react";

const Footer = props => {
  return (
    <div>
      <ul>
        {props.footerList.map((footer, index) => {
          return <li key={index}>{footer}</li>;
        })}
      </ul>
    </div>
  );
};
export default Footer;
