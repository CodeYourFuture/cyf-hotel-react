import React from "react";

export default function Footer({ contactInfo }) {
  return (
    <div className="footer">
      <ul>
        {contactInfo.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}
