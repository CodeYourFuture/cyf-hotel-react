import React, { Component } from 'react';
import Search from '../components/Search.js';
import Results from '../components/Results.js';
import FakeBookings from '../data/fakeBookings.json';
//import Basic from '../components/formik.js'
export default class Bookings extends Component {
  constructor() {
    super()
    this.state = {
      FakeBookings: [],
      filteredRecords: []
    }

  }


  componentWillMount() {
    this.setState({
        FakeBookings,
        filteredRecords: FakeBookings
    })
}
  search = (input) => {

    var filteredRecords = FakeBookings.filter((booking) => {
      console.log(booking.firstName)
      return booking.id === parseInt((input), 10)
        || booking.firstName.toLowerCase() === input
    });

    this.setState({ filteredRecords: filteredRecords });
    return filteredRecords;
  }






render() {
  return (
    <div className="App-content">
      <div className="container">
        <Search search={this.search} />
        <div>Results: {this.state.filteredRecords.length}</div>
        {this.state.FakeBookings ? (
          // <Results bookings={this.state.filteredRecords}/>
          <Results/>
        ) : (
            "No results found!!"
          )}

      </div>
    </div>
  );
}
}

