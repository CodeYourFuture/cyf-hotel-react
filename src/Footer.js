import React from "react";

function Footer(props) {
  return (
    <div>
      <ul>
        {props.contact.map(detail => {
          return <li>{detail}</li>;
        })}
      </ul>
    </div>
  );
}

export default Footer;
