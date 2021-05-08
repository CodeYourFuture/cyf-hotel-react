import React from "react";

const Footer = props => {
  return (
    <div>
      <hr />
      <footer className="footer">
        <ul className="ul">
          {props.address.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
