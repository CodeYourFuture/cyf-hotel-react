import React from "react";

const footerList = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const List = ({ prop }) => {
  return (
    <div>
      prop.map((item, index) =>
      <div key={item.id}>{item.name}</div>)
    </div>
  );
};

export default Footer;
