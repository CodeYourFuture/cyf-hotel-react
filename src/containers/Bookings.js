import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
import * as FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  constructor() {
    super();
    this.state = {
      showResults: false,
    };
  }

  search = (evt) => {
    // Show results only after a search button has been clicked.
    this.setState({
      ...this.state,
      showResults: true,
    });
  };
  
  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          {this.state.showResults && 
            <Results results={FakeBookings} />
          }
        </div>
      </div>
    );
  }
}
