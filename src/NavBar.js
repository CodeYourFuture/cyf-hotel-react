import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="Navbar">
        <Navbar.Brand href="#home"> CYF Hotel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Bookings">Bookings</Nav.Link>
            <Nav.Link href="/Resturant">Resturant Order</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <TouristInfoCards />
            </Route>
            <Route path="/Bookings">
              <Bookings />
            </Route>
            <Route path="/Resturant">
              <Restaurant />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default NavBar;
