import React, { Component } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults/SearchResults";
import FakeBookings from "./data/fakeBookings.json";

export default class Bookings extends Component {
  search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          {/* <SearchResults /> */}
          <SearchResults results={FakeBookings} />
        </div>
      </div>
    );
  }
}
