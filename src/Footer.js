import React from "react";

function Footer({ footerArray }) {
  return (
    <div className="footer-wrapper">
      <ul>
        {footerArray.map((liElement, index) => {
          return (
            <li className="footer-list" key={index}>
              {liElement}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Footer;
