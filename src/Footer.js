import React from "react";

const Footer = props => {
  return (
    <footer className="bg-dark text-center text-lg-start  text-warning">
      <hr />
      <ul>
        {props.infoArray.map(infoElm => (
          <li>{infoElm}</li>
        ))}
      </ul>
    </footer>
  );
};
export default Footer;
