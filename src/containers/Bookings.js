import React, { Component } from 'react';
import Search from '../components/Search.js';
import Result from '../components/Result.js';
import FakeBookings from '../data/fakeBookings.json';

export default class Bookings extends Component {
  search = () => {
    console.info('TO DO!');
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          <Result booking={FakeBookings} />
        </div>
      </div>
    );
  }
}
