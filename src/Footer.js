import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul>
        {props.footerDetails.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
