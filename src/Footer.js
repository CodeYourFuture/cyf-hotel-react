import React from "react";

function Footer(probs) {
  return (
    <div>
      <ul>
        {probs.contact.map((string, index) => {
          return <li key={index}>{string.toString()}</li>;
        })}
      </ul>
    </div>
  );
}

export default Footer;
