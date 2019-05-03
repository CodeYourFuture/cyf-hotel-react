import React, { Component } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = { bookings: FakeBookings };
  }
  search = searchVal => {
    this.setState({
      bookings: this.state.bookings.filter(
        booking =>
          booking.firstName.includes(searchVal) ||
          booking.lastName.include(searchVal)
      )
    });
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          <SearchResults results={FakeBookings} />
        </div>
      </div>
    );
  }
}
