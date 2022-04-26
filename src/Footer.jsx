import React, { createElement } from "react";

const information = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

function Footer() {
  return (
    <ul className="fotter-li">
      {information.map((item, index) => {
        return <li key={index}> {item} </li>;
      })}
    </ul>
  );
}
export default Footer;
