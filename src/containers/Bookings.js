import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
import FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  state = { reservations: [] };

  search = () => {
    console.info("to do");
    this.setState({ reservations: FakeBookings });
  };

  render() {
    const myStyle = {};
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} sera={"okay"} />
          <Results reservations={this.state.reservations} />
        </div>
      </div>
    );
  }
}
