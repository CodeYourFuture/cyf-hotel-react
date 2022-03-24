import React from "react";

export default function Footer(props) {
  return (
    <div>
      {props.contactDetail.map(email => {
        return (
          <ul>
            <li>{email}</li>
          </ul>
        );
      })}
    </div>
  );
}
