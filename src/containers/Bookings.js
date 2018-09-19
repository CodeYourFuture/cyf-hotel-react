import React, { Component } from 'react';
import Search from '../components/Search.js';
import Results from '../components/Results.js';
import fakeBookings from '../data/fakeBookings.json';

export default class Bookings extends Component {

  // state = { results: [] };
  search = () => {
    console.info('TO DO!');
    // this.setState({ results: fakeBookings });
  };

  render() {
    
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          {/* <Results results={this.state.results} /> */}
          <ul>
          <Results results={fakeBookings}/>
          
          </ul>
        </div>
      </div>
    );
  }
}
