import React from "react";
import UnorderedList from "../Lists/UnorderedList";

const Footer = props => {
  return (
    <div>
      <UnorderedList addressArray={props.addressArray} />
    </div>
  );
};

export default Footer;
