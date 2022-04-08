import React from "react";
import "./footer.css";

const Footer = ({ contact }) => {
  return (
    <div className="appFooter">
      <ul className="listFooter">
        {contact.map((data, index) => {
          return <li key={index}>{data}</li>;
        })}
      </ul>
      <span>&copy; CYF Hotel 2022</span>
    </div>
  );
};

export default Footer;
