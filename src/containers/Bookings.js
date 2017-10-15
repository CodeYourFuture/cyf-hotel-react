import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
import FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  constructor(props) {
    super(props)

    this.state = { results: this.filterResults() }
  }

  filterResults = (query, searchType) => {
    return FakeBookings.filter((result) => {
      if (searchType === 'roomId') {
        return result.roomId === parseInt(query, 10)
      } else if (searchType === 'customerName') {
        return result.firstName.toLowerCase().includes(query.toLowerCase())
      } else {
        return false
      }
    })
  }

  handleSearch = (query, searchType) => {
    this.setState({
      results: this.filterResults(query, searchType)
    })
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