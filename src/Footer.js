import React from "react";

const Footer = props => {
  return (
    <div>
      <ul className="footer">
        {props.footers.map(string => {
          return <li>{string}</li>;
        })}
      </ul>
    </div>
  );
};
export default Footer;
