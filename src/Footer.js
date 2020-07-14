import React from "react";
const Footer = props => {
  return (
    <footer className="blockquote-footer">
      <ul className="footerlist">
        {props.hotelDetails.map((detail, index) => {
          return <li key={index}>{detail}</li>;
        })}
      </ul>
    </footer>
  );
};
export default Footer;
