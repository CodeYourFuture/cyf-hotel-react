import React, { Component } from 'react';
import Search from '../components/Search.js';
import Results from '../components/Results.js';
import FakeBookings from '../data/fakeBookings.json';

class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = { inputID: '', inputName: '', bookings: FakeBookings };
  };

  clickById = event => {
    event.preventDefault();
    this.setState({
      inputID: event.target.value
    });
    console.log(this.state.inputID)
  };

  clickName = event => {
    event.preventDefault();
    this.setState({
      inputName: event.target.value
    });
    console.log(this.state.inputName)
  };

  bookingsById = () => {
    this.setState({
      bookings: FakeBookings.filter(booking => {
        if (this.state.inputID !== '') {
          return booking.id === parseInt(this.state.inputID, 10)
        }
        else { return FakeBookings }
      })
    });
  };

  customerName = () => {
    this.setState({
      bookings: FakeBookings.filter(booking => {
        if (this.state.inputName !== '') {
          return (booking.firstName + " " + booking.surname) === this.state.inputName
        }
        else { return FakeBookings }
      })
    });
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search clickById={this.clickById}
            clickName={this.clickName}
            bookingsById={this.bookingsById}
            customerName={this.customerName} />
          <Results result={this.state.bookings} />
        </div>
      </div>
    );
  };
};

export default Bookings;