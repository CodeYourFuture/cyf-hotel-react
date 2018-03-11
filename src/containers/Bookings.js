
import React, { Component } from "react";
import Search from "../components/search/Search.js";
import Results from "../components/results/Results.js";
import * as FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FakeBookings: '',
      term: '',
      result: false,
      direction: {
        sortin: 'asc'
      },
      text: ''
    }
    this.searchHandler = this.searchHandler.bind(this)
    this.sortBy = this.sortBy.bind(this)
  }

  searchHandler(inputType) {
    this.setState({ term: inputType, result: inputType.length ? true : false, text: inputType })
  }

  sortBy(key) {
    this.setState({
      result: FakeBookings.sort((a, b) => (
        this.state.direction[key] === 'asc'
          ? (a[key].toLowerCase() < b[key].toLowerCase())
          : (a[key].toLowerCase() > b[key].toLowerCase())
      )),
      direction: {
        [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
      },
         text: this.state.text   
    })
  }

  render() {
    return (
      <div>
        <Search searchHandler={this.searchHandler} />
        {this.state.result ?
          <Results
            sortBy={this.sortBy}
            filteredResult={FakeBookings.filter(searchingFor(this.state.term))} />
          : <h1>Please enter your search</h1>
        }
      </div>
    );
  }
}

function searchingFor(term) {
  return (e) => {
    return e.firstName.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}


