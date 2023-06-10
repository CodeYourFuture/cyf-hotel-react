import React from "react";

function Footer(props) {
  return (
    <footer>
      <ul>
        <li key={props.address}>{props.address}</li>
        <li key={props.email}>{props.email}</li>
        <li key={props.telephone}>{props.telephone}</li>
      </ul>
    </footer>
  );
}

export default Footer;
