import React from "react";

const Footer = props => {
  return (
    <div id="Footer" className="Footer_CSS">
      <p className="Footer_P_CSS">Email Address: {props.Info[1]}</p>
      <p className="Footer_P_CSS">Tell: {props.Info[2]}</p>
      <p className="Footer_P_CSS">Address: {props.Info[0]}</p>
    </div>
  );
};

export default Footer;
