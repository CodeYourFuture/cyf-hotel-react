import React, { ReactComponentElement } from "react";

/**
 *
 * @param {{ footerInfo: Array}} Props
 * @returns {ReactComponentElement}
 */
const Footer = ({ footerInfo }) => {
  return (
    <ul>
      {footerInfo.map(e => {
        return <li>{e}</li>;
      })}
    </ul>
  );
};

export default Footer;
