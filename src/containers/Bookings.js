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
      // Error messages.
      errorMsg: null,
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
    const apiUrl = `http://localhost:8080/api/reservations?${queryParams}`;

    this.setState({
      // Cancel any prior errors.
      errorMsg: null,
      // Set loading state prior to long fetch operation.
      isLoading: true,
    });

    // Fetch results from backend Node API.
    fetch(apiUrl)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.setState({
          results: jsonData.reservations,
          // Hide loading text.
          isLoading: false,
        });
      })
      // Error fetching results.
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false,
          errorMsg: `Error fetching results: ${error.message}`,
        });
      });
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          {// Show loading text when fetching results.
            this.state.isLoading && <div className='text-info'>Loading...</div>
          }
          {// Show error messages.
            this.state.errorMsg && <div className='text-danger'>{this.state.errorMsg}</div>
          }
          <Results results={this.state.results} />
        </div>
      </div>
    );
  }
}

