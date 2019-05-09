import React, { Component } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = { bookings: null, isLoading: true };
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
  componentDidMount() {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        console.log("fdshdao;ijga;oifdjga;oihj;a", data);
        this.setState({
          bookings: data,
          isLoading: false
        });
      });
  }

  render() {
    return (
      <div className="App-content">
        {!this.state.isLoading ? (
          <div className="container">
            <Search search={this.search} />
            <SearchResults results={this.state.bookings} />
          </div>
        ) : null}
      </div>
    );
  }
}
