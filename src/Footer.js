import React from "react";

const Footer = props => {
  console.log(props);
  return (
    <div className="footerMain">
      <hr />
      <div className="footer">Email: {props.value[1]}</div>
      <div className="footer">Tell: {props.value[2]}</div>
      <div className="footer">Address: {props.value[0]}</div>
    </div>
  );
};

export default Footer;
