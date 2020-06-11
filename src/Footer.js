import React from "react";

const Footer = props => (
  <div className="footer">
    <ul>
      {props.hotelInfo.map((info, index) => {
        return <li key={index}>{info}</li>;
      })}
    </ul>
  </div>
);

export default Footer;
