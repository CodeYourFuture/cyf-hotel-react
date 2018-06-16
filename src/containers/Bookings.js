import React, { Component } from 'react';
import Search from '../components/Search.js';
import Results from '../components/Results.js';
import FakeBookings from '../data/fakeBookings.json';

export default class Bookings extends Component {
  search = () => {
    console.info('TO DO!');
  };

  render() {
    
    const myresults = ['Justine1' , 'Nawal2', 'Ornneille3' ]
    
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          <Results results= {FakeBookings}/*{this.state.results}*/ />
        </div>
      </div>
    );
  }
}




