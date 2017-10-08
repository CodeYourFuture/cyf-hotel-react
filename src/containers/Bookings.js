import React, { Component } from "react";
import Search from "../components/Search.js";
import SearchResultsTable from "../components/ResultsTable.js";
import * as FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {results: []};
  }

  handleSearchIdClick = () => {
    this.setState({results: FakeBookings});
  };
  
  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search handleSearchIdClick={this.handleSearchIdClick} />
          <SearchResultsTable results={this.state.results} />
        </div>
      </div>
    );
  }
}
