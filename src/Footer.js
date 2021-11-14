import React from "react";

function Footer(props) {
  return (
    <div>
      <ul>
        {props.data.map((addressDetail, index) => (
          <li key={index}>{addressDetail}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
