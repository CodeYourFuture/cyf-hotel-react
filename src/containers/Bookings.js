import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
import FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  constructor() {
    super();
    this.state = { results: FakeBookings };
  }
  filterBookingsId = event => {
    var searchValue = document.querySelector("#customerId");
    var inputValue = searchValue.value;

    const filteredBookingsId = this.state.results.filter(result => {
      return result.roomId === parseFloat(inputValue);
    });
    this.setState({
      results: filteredBookingsId
    });
  };
  filterBookingsName = event => {
    var searchValue = document.querySelector("#customerName");
    var inputValue = searchValue.value;

    const filteredBookingsName = this.state.results.filter(result => {
      return result.firstName === inputValue || result.surname === inputValue;
    });
    this.setState({
      results: filteredBookingsName
    });
  };

  onClickId = input => {
    input.preventDefault();
    this.filterBookingsId(input);
  };
  onClickName = input => {
    input.preventDefault();
    this.filterBookingsName(input);
  };
  // search = () => {
  //   console.info("TO DO!");
  // };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search
            search={this.search}
            onClickId={this.onClickId}
            onClickName={this.onClickName}
          />

          {/* <Results results={FakeBookings} /> */}
          <Results results={this.state.results} />
        </div>
      </div>
    );
  }
}
