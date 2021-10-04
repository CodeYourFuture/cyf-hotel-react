import React from "react";

// Renders footer component, called by `App.js`
// I realise this is probably overkill but I just
// wanted to experiment with conditionals in JSX.
let Footer = props => {
  return (
    <footer>
      <ul className="App-footer d-flex justify-content-center flex-wrap">
        {props.contactInfo.map((method, index) =>
          method.includes("@") ? (
            <li className="m-3" key={index}>
              {" "}
              <a href={method}>Email</a>
            </li>
          ) : (
            <li className="m-3" key={index}>
              {method}
            </li>
          )
        )}
      </ul>
    </footer>
  );
};

export default Footer;
