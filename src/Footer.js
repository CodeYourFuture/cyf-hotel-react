import React from "react";

function Footer(props) {
  return (
    <div>
      <ul>
        {props.props.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default Footer;
