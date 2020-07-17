import React from "react";
function Footer(props) {
  return (
    <ul className="footer">
      {props.address.map(item => {
        return <li>{item}</li>;
      })}
    </ul>
  );
}

export default Footer;
