
import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
import Button from "../components/button.js";
import * as FakeBookings from "../data/fakeBookings.json";

function searchingFor(term) {
  return (e) => {
      return e.firstName.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

export default class Bookings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      FakeBookings: '',
      term: '',
    }
    this.searchHandler = this.searchHandler.bind(this)
  }
  searchHandler(inputType) {
    this.setState({ term: inputType })
  }

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Button searchHandler={this.searchHandler} />
          <Search search={this.search} />
          <Results FakeBookings={FakeBookings} term={this.state.term} searchingFor={searchingFor}/>
        </div>
      </div>
    );
  }
}