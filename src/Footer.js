import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul>
        {props.hotelDetails.map(item => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
