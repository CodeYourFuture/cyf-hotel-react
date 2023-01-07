import React from "react";

function Footer(props) {
  return (
    <footer>
      <ul className="footer">
        {props.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </footer>
  );
}

export { Footer };

// ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]
