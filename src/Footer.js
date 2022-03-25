import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <ul className="footer-info">
        {props.contact.map(info => {
          return (
            <li className="info" key={info}>
              {info}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Footer;
