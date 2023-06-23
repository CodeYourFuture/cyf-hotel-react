import React from "react";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <ul className={classes.footer}>
      {props.contents.map((content, index) => (
        <li key={index}>{content}</li>
      ))}
    </ul>
  );
};

export default Footer;
