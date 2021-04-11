import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul>
        {props.footer.map((fake, index) => (
          <li key={index}>{fake}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
