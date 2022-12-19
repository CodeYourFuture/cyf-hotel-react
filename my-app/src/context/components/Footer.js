import React, { Component } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default class Footer extends Component {
  render() {
    return (
      <div className="box" style={{ ...this.context }}>
        <h2>Footer</h2>
      </div>
    );
  }
}
// insted of use static contextType = ThemeContext; in class component we pass the context as a prop to the component

Footer.contextType = ThemeContext; // this is the way to consume the context in class component insted of using Consumer component or useContext hook in functional component
