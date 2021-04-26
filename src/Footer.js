import React from "react";

const Footer = props => {
  return (
    <div style={{ textAlign: "center", margin: "8px" }}>
      <ul style={{ listStyle: "none", margin: "5px" }}>
        {props.addresses.map((address, index) => {
          return <li key={index}>{address}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
