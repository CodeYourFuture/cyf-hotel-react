import React, { Component } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../contexts/ThemeContext";

export default class Sidebar extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <div className="box" style={{ ...this.context }}>
        <h4>Sidebar</h4>
        <ul>
          <li>
            <Link to="/">cards</Link>{" "}
          </li>
          <li>
            <Link to="contact">Contact</Link>{" "}
          </li>
          <li>
            <Link to="/about">About</Link>{" "}
          </li>
        </ul>
      </div>
    );
  }
}
// insted of using Consumer component we can use contextType property to consume the context in class component
// and useContext hook to consume the context in functional component
