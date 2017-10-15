import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
import * as FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  constructor() {
    super();
    this.state = {
      // Results of the search.
      results: [],
    };
  }

  // Do a search and set results in state.
  search = (evt) => {
    // Simulate a search by using fake bookings for now.
    this.setState({
      ...this.state,
      results: FakeBookings,
    });
  };
  
  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          <span>Results ({this.state.results.length} found)</span>
          <Results results={this.state.results} />
        </div>
      </div>
    );
  }
}
