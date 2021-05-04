import React, { useLayoutEffect } from "react";

function Footer(props) {
  return (
    <ul>
      {props.footerdata.map((i, index) => {
        return <li key={index}>{i}</li>;
      })}
    </ul>
  );
}

export default Footer;
