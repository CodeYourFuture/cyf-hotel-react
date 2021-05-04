import React from "react";

function Footer(props) {
  return (
    <div>
      <ul>
        {props.feet.map(function(foot, index) {
          return <li key={index}>{foot}</li>;
        })}
      </ul>
    </div>
  );
}

export default Footer;
console.log();
