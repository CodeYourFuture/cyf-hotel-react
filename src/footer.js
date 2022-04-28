import React from "react";

export default function Footer(props) {
  return (
    <footer>
      {props.contactDetail.map(detail => {
        return (
          <ul>
            <li>{detail}</li>
          </ul>
        );
      })}
    </footer>
  );
}
