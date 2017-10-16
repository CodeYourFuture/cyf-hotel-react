import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
// import * as FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {

  constructor() {
    super();
    this.state = {
      // Results of the search.
      results: [],
      // Whether we are waiting for results to load.
      isLoading: false,
    };
  }

  // Do a search and set results in state.
  search = (field, value) => {

    // Construct backend API URL query params.
    let queryParams = '';
    if (field === 'customerId') {
      queryParams += `id=${value}&`;
    }
    else if (field === 'customerName') {
      queryParams += `name=${value}&`;
    }

    // Set loading state prior to long fetch operation.
    this.setState({
      isLoading: true,
    });

    // Fetch results from backend Node API.
    fetch(`http://localhost:8080/api/reservations?${queryParams}`)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.setState({
          results: jsonData.reservations,
          // Hide loading text.
          isLoading: false,
        });
      });
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          {/* Show loading text when fetching results. */}
          {this.state.isLoading && <div className='text-info'>Loading...</div>}
          <Results results={this.state.results} />
        </div>
      </div>
    );
  }
}

