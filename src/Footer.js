import React from "react";
const Footer = props => (
  <div>
    <ul>
      {props.hotelInfo.map((info, index) => {
        return <li key={index}>{info}</li>;
      })}
    </ul>
  </div>
);
export default Footer;
