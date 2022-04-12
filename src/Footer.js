import React from "react";

const RenderListItem = props => {
  return <li>{props.address}</li>;
};

const Footer = () => {
  const addresses = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <ul className="footer">
      {addresses.map((el, index) => {
        return <RenderListItem key={index} address={el} />;
      })}
    </ul>
  );
};

export default Footer;
