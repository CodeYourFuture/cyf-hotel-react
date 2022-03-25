import React from "react";

function Footer(probs) {
  return (
    <div>
      <ul>
        {probs.contact.map(string => {
          return <li>{string}</li>;
        })}
      </ul>
    </div>
  );
}

export default Footer;
