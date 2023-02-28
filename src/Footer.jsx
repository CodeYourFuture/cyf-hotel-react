import React from "react";

export default function Footer(props) {
  const list = props.address.map((el) => <li>{el}</li>);
  return <ul className="footerAddress">{list}</ul>;
}
