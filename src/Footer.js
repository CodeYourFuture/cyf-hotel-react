import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul className="hide-li ">
        {props.footerArray.map((footerInfo, index) => {
          return <li key={index}>{footerInfo}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
