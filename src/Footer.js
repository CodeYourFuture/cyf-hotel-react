import React from "react";

const Footer = props => {
  return (
    <footer className="footer">
      <ul>
        {props.footer.map((info, index) => (
          <li key={index}>{info}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
