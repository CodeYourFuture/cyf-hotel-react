import React, { Component } from "react";
import Search from "./Search.js";
// import Results from './Results.js';
// import FakeBookings from '../data/fakeBookings.json';

export default class Bookings extends Component {
  search = () => {
    console.info("TO DO!");
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          {/* <Results results={this.state.results} /> */}
        </div>
      </div>
    );
  }
}
