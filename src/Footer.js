import React from "react";

const Footer = props => {
  return (
    <footer className="footer">
      <ul>
        {props.info.map(data => (
          <li>{data}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
