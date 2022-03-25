import React from "react";

function Footer(props) {
  return (
    <div>
      <ul>
        {props.contact.map(info => {
          return <li key={info}>{info}</li>;
        })}
      </ul>
    </div>
  );
}

export default Footer;
