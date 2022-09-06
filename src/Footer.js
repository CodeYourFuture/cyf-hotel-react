import React from "react";

function Footer(probs) {
  return (
    <div>
      
        {probs.contact.map((string, index) => {
          return <li key={index}>{string.toString()}</li>;
        })}
      
    </div>
  );
}

export default Footer;
