import React from "react";

function Footer(props) {
  return (
    <footer>
      <ul>
        {props.contact.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </footer>
  );
}

export default Footer;
