/* eslint-disable indent*/
import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <ul className="contact">
        {props.contact.map(contactDetails => (
          <li key={contactDetails}>{contactDetails}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
