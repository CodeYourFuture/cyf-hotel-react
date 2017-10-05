import React, { Component } from "react";
import Search from "../components/Search.js";
import ResultsTable from '../components/resultsTable'
// import Results from "../components/Results.js";
import FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  search = () => {
    console.info("to do!");
  };

  render() {
    return (
      <div className="App-content">
            <div className="container">
          <Search search={this.search} />
          <ResultsTable bookings={FakeBookings} search={this.search} />
          {/* <Results results={this.state.results} /> */}
        </div>
      </div>
    );
  }
}
