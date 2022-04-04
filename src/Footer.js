import React from "react";

const Footer = props => {
  return (
    <div>
      <ul>
        {props.data.map(data => (
          <li key={data}>{data}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
