import React, { Component } from 'react';
import Search from '../components/Search.js';
import ResultTable from '../components/Results.js';
import FakeBookings from '../data/fakeBookings.json';
import moment from 'moment';

import '../results.css';

export default class Bookings extends Component {
  search = () => {
    console.info('TO DO!');
  };
  render() {
    //console.log(FakeBookings)

    return (

      <div className="App-content">
        <div className="container">
          <Search search={this.search}  />
          <ResultTable data={FakeBookings} />
          

          {/* <FakeBookings  /> */}
          
          {/*<Results results={this.state.results} />*/} 
        </div>
      </div>
    );
  }
}
