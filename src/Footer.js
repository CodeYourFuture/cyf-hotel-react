import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul>
        {props.hotelDetails.map(item => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
