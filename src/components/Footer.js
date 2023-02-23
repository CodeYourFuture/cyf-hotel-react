import React from "react";

export const Footer = props => {
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {props.footArray.map(val => {
          return <li>{val}</li>;
        })}
      </ul>
    </div>
  );
};
