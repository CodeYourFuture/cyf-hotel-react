import React from "react";

const Footer = props => {
  const footerItems = ["Address: ", "Email Address: ", "Tell: "];
  return (
    <div id="Footer" className="Footer_CSS">
      {props.Info.map((element, index) => {
        return (
          <p className="Footer_P_CSS" key={index}>
            {footerItems[index]}
            {element}
          </p>
        );
      })}
    </div>
  );
};

export default Footer;
