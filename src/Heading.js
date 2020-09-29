import React, { Component } from "react";
import "./App.css";

class Heading extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">CYF Hotel</header>
        <img
          className="App-logo"
          src="https://image.flaticon.com/icons/svg/139/139899.svg"
          alt="logo"
        />
      </div>
    );
  }
}

export default Heading;

// Note: alternative option without use of {Component} //
// const Heading = () => {
//     return <header className="App-header">CYF Hotel</header>;
// }
