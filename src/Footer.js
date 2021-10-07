import React from "react";

//addrArray

const Footer = props => {
  return (
    <div className="container">
      <footer className=" d-flex flex-wrap justify-content-between  py-3 my-5 border-top">
        <ul className="nav flex-column">
          {props.addrArray.map(address => (
            <li key={address} className="nav-item mb-1">
              {address}
            </li>
          ))}
        </ul>
        <span className="text-muted">© 2021 React training CYF, Inc</span>
      </footer>
    </div>
  );
};

export default Footer;
