import React, { Component } from "react";
import Search from "../components/Search.js";
import SearchResultsTable from "../components/ResultsTable.js";
import * as FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {results: FakeBookings};
  }

  search = () => {
    console.info("to do!");
  };
  
  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          <SearchResultsTable results={this.state.results} />
        </div>
      </div>
    );
  }
}
