import React from "react";

const Footer = props => {
  return (
    <ul>
      <footer className="footer">
        {props.footer.map(foot => {
          return <li className="footer-style">{foot}</li>;
        })}
      </footer>
    </ul>
  );
};

export default Footer;
