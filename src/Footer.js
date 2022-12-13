import React from "react";

function Footer() {
  const myFooter = [
    "123 Fake Street London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  return (
    <footer className="App-footer">
      <ul>
        {myFooter.map((element, index) => (
          <li key={index}> {element}</li>
        ))}
      </ul>
    </footer>
  );
}
export default Footer;
