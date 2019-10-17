import React, { Component } from "react";
import Search from "./Search.js";
import FakeBookings from "./data/fakeBookings.json";
import SearchResults from "./components/SearchResults.js";

const search = searchVal => {
  console.info("TO DO!", searchVal);
};

class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeBookings: []
    };
  }
  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults results={FakeBookings} />
        </div>
      </div>
    );
  }
}

export default Bookings;
