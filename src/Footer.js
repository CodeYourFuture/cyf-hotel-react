import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <ul className="footer-info">
        {props.contact.map((info, index) => {
          return (
            <li key={index} className="info">
              {info}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Footer;
