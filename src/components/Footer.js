import React from "react";

export default function Footer({ contactDetails }) {
  return (
    <footer>
      <ul>
        {contactDetails.map((detail, i) => (
          <li key={i}>{detail}</li>
        ))}
      </ul>
    </footer>
  );
}
