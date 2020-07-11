import React from "react";

function Footer(props) {
  return (
    <footer>
      <ul>
        {props.info.map(item => {
          return <li>{item}</li>;
        })}
      </ul>
    </footer>
  );
}
export default Footer;
