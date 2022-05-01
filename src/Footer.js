import React from "react";

export default function Footer(props) {
  return (
    <div className="footer">
      <ul>
        {props.contact.map((string, index) => {
          return <li key={index}>{string}</li>;
        })}
      </ul>
    </div>
  );
}
