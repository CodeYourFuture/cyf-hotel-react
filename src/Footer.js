import React from "react";

export default function Footer(props) {
  let footInfo = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  let footList = footInfo.map(address => <li>{address}</li>);

  return <ul>{footList}</ul>;
}
