import React from "react";

const Footer = props => {
  return (
    <footer className="bg-dark text-center text-lg-start  text-warning">
      <hr />
      <ul>
        {props.infoArray.map((infoElm, index) => (
          <li key={index}>{infoElm}</li>
        ))}
      </ul>
    </footer>
  );
};
export default Footer;
