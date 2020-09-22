import React from "react";

export default function Footer(props) {
  console.log(props);

  let footList = props.footInfo.map(address => (
    <li key={address.toString()}>{address}</li>
  ));

  return (
    <div className="footer">
      <ul className="footer-list">{footList}</ul>
    </div>
  );
}
