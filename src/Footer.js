import React from "react";

const Footer = () => {
  const Address = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="footer">
      <ul className="list-group">
        {Address.map((element, index) => (
          <li className="list-group-item" key={index}>
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
