import React from "react";
import "./Footer.css";

// Renders footer component, called by `App.js`
// I realise this is probably overkill but I just
// wanted to experiment with conditionals in JSX.
const Footer = props => {
  return (
    <footer>
      <ul className="Footer-content d-flex justify-content-center flex-wrap">
        {props.contactInfo.map((contactMethod, index) =>
          contactMethod.includes("@") ? (
            <li className="m-sm-0 m-lg-3 px-2" key={index}>
              {" "}
              <a href={contactMethod}>hello@fakehotel.com</a>
            </li>
          ) : (
            <li className="m-sm-0 m-lg-3 px-2" key={index}>
              {contactMethod}
            </li>
          )
        )}
      </ul>
    </footer>
  );
};

export default Footer;
