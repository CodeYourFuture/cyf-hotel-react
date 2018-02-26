
import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
import * as FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  search = () => {
    //   <div>
    //  { FakeBookings.map((results) => {
    //     return <div>{results.title}</div>
    //   })}
    //   </div>
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          <Results FakeBookings={FakeBookings} />
        </div>
      </div>
    );
  }
}