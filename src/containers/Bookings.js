import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
import FakeBookings from "../data/fakeBookings.json";
import ResultFound from "../components/ResultFound.js";

export default class Bookings extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      err: null,
      results: [],
      bookings: []
    };
  }
  componentDidMount() {
    fetch("https://infinite-ravine-88150.herokuapp.com/")
      .then(res => res.json())
      .then(data => {
        this.setState({ isLoading: false, results: data, bookings: data });
      })
      .catch(err => {
        this.setState({ err: err });
      });
  }
  filterBookingsId = event => {
    var searchValue = document.querySelector("#customerId");
    var inputValue = searchValue.value;

    const filteredBookingsId = this.state.results.filter(result => {
      return result.roomId === parseFloat(inputValue);
    });
    this.setState({
      bookings: filteredBookingsId
    });
  };
  filterBookingsName = event => {
    var searchValue = document.querySelector("#customerName");
    var inputValue = searchValue.value;

    const filteredBookingsName = this.state.results.filter(result => {
      return result.firstName === inputValue || result.surname === inputValue;
    });
    this.setState({
      bookings: filteredBookingsName
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

  render() {
    console.debug("Test");
    if (this.state.isLoading) {
      return <div> Page is Loading... 🤔</div>;
    } else if (this.state.err !== null && this.state.err !== undefined) {
      return <div> The server is encountering an error..</div>;
    } else {
      return (
        <div className="App-content">
          <div className="container">
            <Search
              search={this.search}
              onClickId={this.onClickId}
              onClickName={this.onClickName}
            />
            <ResultFound count={this.state.bookings.length} />
            <Results results={this.state.bookings} />
          </div>
        </div>
      );
    }
  }
}
