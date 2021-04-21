import React from "react";

const Footer = props => {
  return (
    <footer>
      <ul>
        {props.elements.map(element => {
          return <li key={element}>{element}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
