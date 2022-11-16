import React from "react";
const Footer = props => {
  return (
    <footer>
      <ul>
        {props.arrayProp.map((x, index) => {
          return <li key={index}>{x}</li>;
        })}
      </ul>
    </footer>
  );
};
export default Footer;
