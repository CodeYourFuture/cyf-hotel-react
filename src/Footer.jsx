import React from "react";

const Footer = props => (
  <div>
    <footer>
      <ul className="Hotel-Info">
        {props.info.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </footer>
  </div>
);

export default Footer;
