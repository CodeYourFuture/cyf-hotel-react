import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
// import * as FakeBookings from "../data/fakeBookings.json";


// Calculate number of days between two dates (in string).
function daysBetweenDates(dateStr1, dateStr2) {
  const date1 = new Date(dateStr1);
  const date2 = new Date(dateStr2);

  const diffSeconds = date2 - date1;
  const diffDays = Math.round(diffSeconds / (1000 * 60 * 60 * 24));
  return diffDays;
}

// Add a new field 'numDays' (diff between checkin and checkout date) to the
// reservations array.
function addNumDays(reservations) {
  return reservations.map(res => {
    res.numDays = daysBetweenDates(res.checkInDate, res.checkOutDate);
    return res;
  });
}


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
    // Allow setting a different backend hostname from env var.
    const baseUrl = process.env.REACT_APP_BACKEND_API_BASE_URL
      || 'http://localhost:8080/api/reservations';
    // Full URL to call backend API.
    const apiUrl = baseUrl + '?' + queryParams;

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
          // Add 'numDays' field before committing to state.
          results: addNumDays(jsonData.reservations),
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

