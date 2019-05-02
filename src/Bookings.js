import React, { Component } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FakeBookings: null,
      isLoading: true
    };
  }

  componentDidMount() {
    fetch("https://cyf-react.glitch.me")
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          throw new Error("HTTP error");
        }
      })
      .then(res => res.json())
      .then(data =>
        this.setState({
          FakeBookings: data,
          isLoading: false,
          SearchResults: data
        })
      )
      .catch(err => {
        this.setState({
          err: err
        });
      });
  }

  // Match customer.firstName or customer.surname
  search = searchVal => {
    let filteredSearch = this.state.FakeBookings.filter(customer => {
      return searchVal === customer.surname || searchVal === customer.firstName;
    });

    if (filteredSearch.length === 0) {
      this.setState({ SearchResults: this.state.FakeBookings });
    } else {
      this.setState({ SearchResults: filteredSearch });
    }
  };

  loadingMessage = () => {
    return <span>Loading...</span>;
  };

  errorMessage = () => {
    return (
      <div class="alert alert-danger" role="alert">
        Error: "HTTP error"
      </div>
    );
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          {this.state.err ? this.errorMessage() : null}
          <Search search={this.search} />

          {this.state.isLoading ? (
            this.loadingMessage()
          ) : (
            <SearchResults results={this.state.SearchResults} />
          )}
        </div>
      </div>
    );
  }
}
