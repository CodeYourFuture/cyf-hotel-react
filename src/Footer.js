import React from "react";

function Footer() {
  const array = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 "
  ];
  return (
    <div className="idFooter">
      {array.map((name, index) => {
        return <li key={index}>{name}</li>;
      })}
    </div>
  );
}
export default Footer;
