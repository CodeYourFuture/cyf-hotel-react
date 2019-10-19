import React, { Component } from "react";
import Search from "./Search.js";
import FakeBookings from "./data/fakeBookings.json";
import SearchResults from "./components/SearchResults.js";

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: FakeBookings
    };
  }

  /*  componentDidMount() {
    fetch("https://cyf-react.glitch.me/error")
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          throw new Error("HTTP error");
        }
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoading: false,
          results: data
        });
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          error: err
        });
      });
  } */
  search = searchVal => {
    let searchResult = FakeBookings.filter(
      customer =>
        customer.firstName.toUpperCase().includes(searchVal.toUpperCase()) ||
        customer.surname.toUpperCase().includes(searchVal.toUpperCase()) ||
        customer.title.toUpperCase().includes(searchVal.toUpperCase())
    );
    this.setState({ results: searchResult });
    console.info("TO DO!", searchResult);
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          {/* <SearchResults /> */}
          <SearchResults results={this.state.results} />
          {console.log(FakeBookings)}
        </div>
      </div>
    );
  }
}
