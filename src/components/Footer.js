import React from "react";

const Footer = props => {
  return (
    <div id="footer" className="footer">
      <ul>
        {props.info.map((p, i) => {
          return <li key={i}> {p} </li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
