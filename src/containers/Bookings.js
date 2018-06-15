import React, { Component } from 'react';
import Search from '../components/Search.js';
import Results from '../components/Results.js';
import FakeBookings from '../data/fakeBookings.json';

class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '', bookings: FakeBookings };
  }
  userData = event => {
    event.preventDefault();
    this.setState({
      input: event.target.value
    });
  };

  bookingsById = () => {
    this.setState({
      bookings: FakeBookings.filter(booking => {
        return booking.id === parseInt(this.state.input, 10);
      })
    });
  };

  customerName = () => {
    this.setState({
      bookings: FakeBookings.filter(booking => {
        return (booking.firstName + " " + booking.surname) === this.state.input;
      })
    });
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search userData={this.userData} bookingsById={this.bookingsById} customerName={this.customerName} />
          <Results result={this.state.bookings} />
        </div>
      </div>
    );
  };
};

export default Bookings;