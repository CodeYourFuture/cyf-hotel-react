import React from "react";

const Footer = props => {
  return (
    <div className="footer-app">
      <ul>
        {props.footer.map((element, i) => (
          <li key={i}>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
