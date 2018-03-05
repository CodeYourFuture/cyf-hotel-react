
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
          ? (a[key] < b[key])
          : (b[key] < a[key])
      )),
      direction: {
        [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
      }
    })
    this.searchHandler(this.state.text)
  }

  render() {

    return (
      <div>
        <Button searchHandler={this.searchHandler} />
        <Search search={this.search} />
        {this.state.result ?
          <Results
            sortBy={this.sortBy}
            filteredResult={FakeBookings.filter(searchingFor(this.state.term))} />
          : 'please enter your text'
        }
      </div>
    );
  }
}

