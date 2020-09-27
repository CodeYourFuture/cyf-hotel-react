import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <ul className="list-group">
        {props.props.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default Footer;
