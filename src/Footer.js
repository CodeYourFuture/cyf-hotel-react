import React from "react";

const Footer = props => {
  return (
    <footer className="footer text-white bg-dark p-3">
      <ul>
        {props.info.map((info, index) => (
          <li key={index}>{info}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
