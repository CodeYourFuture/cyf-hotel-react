import React from "react";

const Footer = props => {
  return (
    <div>
      <footer className="footer">
        <p className="text-white">Company Address</p>
        <ul className="list-group ">
          {props.addressInfo.map(address => {
            return <li className="text-white">{address}</li>;
          })}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
