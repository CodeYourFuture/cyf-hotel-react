import React from "react";

export const Footer = props => {
  return (
    <div>
      <ul>
        {props.footArray.map(val => {
          return <li>{val}</li>;
        })}
      </ul>
    </div>
  );
};
