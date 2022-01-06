import React from "react";

const Footer = props => {
  return (
    <footer>
      <ul>
        {props.arrayOfProp.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
