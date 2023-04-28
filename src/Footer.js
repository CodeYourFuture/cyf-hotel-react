import React from "react";

const Footer = ({ newProp }) => {
  return (
    <footer>
      <ul>
        {newProp.map((link, index) => {
          return <li key={index}>{link}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
