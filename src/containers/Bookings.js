import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
import FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  constructor(props) {
    super(props)

    this.state = { results: FakeBookings }
  }

  handleSearch = (query, searchType) => {
    let filtered = FakeBookings.filter((result) => {
      if (searchType === 'roomId') {
        return result.roomId === parseInt(query, 10)
      } else if (searchType === 'customerName') {
        return result.firstName === query
      } else {
        return result
      }
    })
    this.setState({ results: filtered })
  }

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search onSearch={this.handleSearch} />
          <Results results={this.state.results} />
        </div>
      </div>
    );
  }
}