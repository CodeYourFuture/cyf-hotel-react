import React, { Component } from 'react';
import Search from '../components/Search.js';
import BookingsMessage from '../components/BookingsMessage.js';
// import Results from '../components/Results.js';
// import FakeBookings from '../data/fakeBookings.json';

export default class Bookings extends Component {
  search = () => {
    console.info('TO DO!');
  };
  
  render() {
    return (
      <div className="App-content">
        <BookingsMessage />
        <div className="container">
          <Search search={this.search} />
          {/* <Results results={this.state.results} /> */}
        </div>
      </div>
    );
  }
}
