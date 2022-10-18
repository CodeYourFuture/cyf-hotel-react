import React from "react";

const Footer = props => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <p className="text-white">Company Address</p>
        <ul className="list-group ">
          {props.addressInfo.map((address, ind) => {
            return (
              <li className="text-white" key={ind}>
                {address}
              </li>
            );
          })}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
