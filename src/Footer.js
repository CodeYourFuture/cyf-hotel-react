import React from "react";

const Footer = ({ arr }) => {
  return (
    <div>
      <ul className="list-unstyled text-center">
        {arr.map(item => {
          return <li key={item.length}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
