import React from "react";

function Footer() {
  const info = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div id="footer">
      <ul>
        {info.map((info, i) => {
          return <li key={i}>{info}</li>;
        })}
      </ul>
    </div>
  );
}

export default Footer;
