import React from "react";
const information = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
function Footer(props) {
  information.map(data => {
    return (
      <ul>
        <li> {props.data}</li>
      </ul>
    );
  });
}
export default Footer;
