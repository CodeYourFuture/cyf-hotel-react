import React from "react";
import Footerprops from "./Footerprops";
import Array from "./Array";

const contactUs = () => {
  return <Footerprops address={Array[0]} email={Array[1]} tel={Array[2]} />;
};
const Footer = () => {
  return <div>{Array.map(contactUs)}</div>;
};

export default Footer;
