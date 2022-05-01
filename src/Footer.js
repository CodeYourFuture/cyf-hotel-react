import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <ul>
        {props.contact.map(string => {
          return <li className="unordered-list">{string}</li>;
        })}
      </ul>
    </div>
  );
}

export default Footer;
