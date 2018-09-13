import React, { Component } from 'react';
import Search from '../components/Search.js';
// import Results from '../components/Results.js';
import Results from '../components/Results.js';

// import FakeBookings from '../data/fakeBookings.json';
import bookings from "../data/fakeBookings.json";
console.log(bookings);
export default class Bookings extends Component {
  search = () => {
    console.info('TO DO!');
  };
  
  render() {
    return <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          {/* <Results results={this.state.results} /> */}
          <Results results={bookings} />

        </div>
      </div>;
  }
}
