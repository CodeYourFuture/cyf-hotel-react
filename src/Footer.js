import React from "react";

const Footer = props => {
  return (
    <div>
      <ul className="footer">
        {props.appFooter.map(data => {
          return <li>{data}</li>;
        })}
      </ul>
    </div>
  );
};
export default Footer;
