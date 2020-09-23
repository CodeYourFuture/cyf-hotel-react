import React, { Component } from "react";
// import "./App.css";

// const Heading = () => {
//     return <header className="App-header">CYF Hotel</header>;
// }

class Heading extends Component {
  render() {
    return (
      <header className="App-header">
        <img
          className="App-logo"
          src="https://image.flaticon.com/icons/svg/139/139899.svg"
        />
        CYF Hotel
      </header>
    );
  }
}

export default Heading;
