
import React, { Component } from "react";
import Search from "../components/search/Search.js";
import Results from "../components/results/Results.js";

// import * as FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FakeBookings: [],
      term: null,
      result: false,
      direction: {
        sortin: 'asc',
        error: null,
      },
      text: null,
    }
    this.searchHandler = this.searchHandler.bind(this)
    this.sortBy = this.sortBy.bind(this)
    this.sortByNumber = this.sortByNumber.bind(this)
  }


  componentDidMount() {
    fetch(`http://192.168.43.95:8080/api/Customersjoinreservation`)
      .then((res) => res.json())
      .then((FakeBookings) => { this.setState({ FakeBookings: FakeBookings.customers }) })
      .catch(error => {
        this.setState({
          error
        })
      })
  }

  searchHandler(inputType) {
    this.setState({ term: inputType, result: inputType.length ? true : false, text: inputType })
  }

  sortBy(key) {
    this.setState({
      result: this.state.FakeBookings.sort((a, b) => (
        this.state.direction[key] === 'asc'
          ? (a[key].toLowerCase()) < (b[key].toLowerCase())
          : (a[key].toLowerCase()) > (b[key].toLowerCase())
      )),
      direction: {
        [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
      },
      text: this.state.text
    })
  }

  sortByNumber(key) {
    this.setState({
      result: this.state.FakeBookings.sort((a, b) => (
        this.state.direction[key] === 'asc'
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key])
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
    // const filteredResult = this.state.FakeBookings.filter(searchingFor(this.state.term))
    return (
      <div>
        <Search searchHandler={this.searchHandler} />
        {this.state.result
          ? <Results
            sortByNumber={this.sortByNumber}
            sortBy={this.sortBy}
            filteredResult={this.state.FakeBookings.filter(searchingFor(this.state.term))} err={this.state.error} textInput={this.state.textInput} />
          : <h1>Please enter your search</h1>
        }
      </div>
    );
  }
}

function searchingFor(term) {
  return (e) => {
    return e.firstname.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}


// this.setState({ FakeBookings: parsedJSON.customers })
