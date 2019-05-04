import React, { Component } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      booking: null,
      err: false
    };
  }
  componentDidMount() {
    fetch(`https://cyf-react.glitch.me/error`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoading: false,
          booking: data
        });
      })
      .catch(err =>
        this.setState({
          err: err
        })
      );
  }

  search = searchVal => {
    //console.info("TO DO!", searchVal);

    let filter = this.state.booking.filter(
      fakeResult =>
        fakeResult.firstName === searchVal || fakeResult.surName === searchVal
    );
    if (filter.length === 0) {
      this.setState({ booking: this.state.booking });
    } else {
      this.setState({ booking: filter });
    }
  };

  render() {
    if (this.state.error) {
      return (
        <div className="App-content">
          <div className="container">
            <Search search={this.search} />
            <h1>500 HTTP error something went wrong</h1>
          </div>
        </div>
      );
    } else if (this.state.isLoading) {
      return (
        <div className="App-content">
          <div className="container">
            <Search search={this.search} />
            <h1>Loading... 👽</h1>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App-content">
          <div className="container">
            <Search search={this.search} />
            <SearchResults results={this.state.booking} />
          </div>
        </div>
      );
    }
  }
}
