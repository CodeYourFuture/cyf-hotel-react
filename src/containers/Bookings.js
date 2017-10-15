import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
import FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  constructor(props) {
    super(props)

    this.state = { results: FakeBookings }
  }

  handleSearch = () => {}

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search onSearch={this.handleSearch} />
          <Results results={this.state.results} />
        </div>
      </div>
    );
  }
}