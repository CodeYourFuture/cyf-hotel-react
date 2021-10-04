import React from "react";

//addrArray

const Footer = props => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-1 my-5 border-top">
        <div className="row">
          <div className="col-6">
            <ul className="nav flex-column">
              <li className="nav-item mb-1">
                {props.addrArray.map(address => address)}
              </li>
            </ul>
          </div>
        </div>
        <span className="text-muted">© 2021 React training CYF, Inc</span>
      </footer>
    </div>
  );
};

export default Footer;
