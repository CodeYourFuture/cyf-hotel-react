import React, { Component } from 'react';
import Search from '../components/Search.js';
import Results from '../components/Results.js';
import FakeBookings from '../data/fakeBookings.json';

export default class Bookings extends Component {
//   search = () => {
//     console.info('TO DO!');
// }
  
// constructor(props){
//   super(props)
//   this.state={
//     FakeBookings: FakeBookings
//   }
// }
  render () {
    // FakeBookings; 

return  (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          {/* <Results results={this.state.results} /> */}
          <Results results={FakeBookings} />
        </div>
      </div>
    );
  }
}
