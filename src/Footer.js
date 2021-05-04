import React from "react";
import { Navbar, NavLink, NavItem, Nav } from "reactstrap";

const Footer = props => {
  return (
    <div>
      <ul className="d-flex justify-content-around bg-dark text-white">
        {props.keys.map((name, index) => {
          return (
            <div key={index}>
              <Navbar light expand="md">
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/components/">
                      <p className="text-white px-auto mx-auto">{name}</p>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Navbar>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
