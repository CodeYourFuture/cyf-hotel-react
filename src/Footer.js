import React from "react";

const Footer = props => {
  return (
    <ul>
      <footer className="footer">
        {props.footer.map(name => {
          return <li>{name}</li>;
        })}
      </footer>
    </ul>
  );
};

export default Footer;
