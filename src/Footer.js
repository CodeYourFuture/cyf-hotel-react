import React from "react";

function Footer(props) {
  return (
    <footer>
      <p> Contact us</p>
      <ul>
        {props.contacts.map((contact, index) => {
          return <li key={index}> {contact}</li>;
        })}
      </ul>
    </footer>
  );
}

export default Footer;
