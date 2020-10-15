import React from "react";

function Footer(props) {
  //props.footer is the array here.
  return (
    <ul>
      <li className="address">{"Address: " + props.footer[0]}</li>
      <li className="email">{"    Email:" + props.footer[1]}</li>
      <li className="telephone">{"    Telephone:" + props.footer[2]}</li>
    </ul>
  );
}

export default Footer;
