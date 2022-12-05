import React from "react";

export default function Footer(props) {
  let addressList = props.address;
  return (
    <div>
      <ul>
        {addressList.map(address => {
          return <li>{address}</li>;
        })}
      </ul>
    </div>
  );
}
