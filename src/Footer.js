import React from "react";

const Footer = props => {
  let Address = props.hotelAddress;
  console.log(Address);
  return (
    <div id="Footer">
      <ul>
        {Address.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
