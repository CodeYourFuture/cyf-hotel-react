import React from "react";

const Footer = props => {
  return (
    <footer>
      <ul>
        {props.data.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
