import React from "react";

function Footer({ footerArray }) {
  return (
    <ul>
      {footerArray.map((liElement, index) => {
        return <li key="index">{liElement}</li>;
      })}
    </ul>
  );
}
export default Footer;
