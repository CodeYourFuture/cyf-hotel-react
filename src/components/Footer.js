import React from "react";

function Footer(props) {
  return (
    <ul className="list-group-flush row">
      {props.info.map((data, index) => (
        <li className="list-group-item col" key={index}>
          {data}
        </li>
      ))}
    </ul>
  );
}

export default Footer;
