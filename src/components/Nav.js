import React from "react";

import { Link } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <div className="Nav-Bar">
        <ul className="Nav-Items">
          <Link to="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link to="/bookings">
            {" "}
            <li>Bookings</li>
          </Link>
          <Link to="/restaurant">
            <li>Restaurant</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Nav;
