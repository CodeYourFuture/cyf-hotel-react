import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
import rsults from "../data/fakeBookings.json";
export default class Bookings extends Component {
  state = { rsults: undefined };
  searchHandler = () => {
    this.setState({ rsults});
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search searchHandler={this.searchHandler} />
          {this.state.rsults ? (
            <Results results={this.state.rsults} />
          ) : (
            "No results found!!"
          )}
        </div>
      </div>
    );
  }
}
