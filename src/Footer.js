import React from "react";

function Footer(props) {
  return (
    <div>
      <ul>
        {props.contact.map(el => {
          return <li>{el}</li>;
        })}
      </ul>
    </div>
  );
}

export default Footer;
