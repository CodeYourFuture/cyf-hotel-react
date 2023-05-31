import React from "react";
function Footer({}) {
  const array = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];
  const arrayElement = array.map((element) => (
    <li key={array.indexOf(element)}>{element} </li>
  ));

  return (
    <footer>
      <ul>{arrayElement} </ul>
    </footer>
  );
}
export default Footer;
