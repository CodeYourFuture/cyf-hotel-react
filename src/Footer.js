import React from "react";
const footer = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
const cssStyle = {
  listStyleType: "none",
  display: "flex",
  justifyContent: "center",
  color: "rgb(255,0,0)"
};

function Footer() {
  return (
    <ul style={cssStyle}>
      {footer.map(function(name, index) {
        console.log(<li key={index}>{name}</li>);
        return <li key={index}>{name}</li>;
      })}
    </ul>
  );
}
export default Footer;
