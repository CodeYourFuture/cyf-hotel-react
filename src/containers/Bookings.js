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
  };

  clickName = event => {
    event.preventDefault();
    this.setState({
      inputName: event.target.value
    });
  };

  bookingsById = () => {
    if (this.state.inputID !== '') {
      var filteredBookings = FakeBookings.filter(booking => {
        return booking.id === parseInt(this.state.inputID, 10)
      });
      this.setState({
        bookings: filteredBookings,
        inputID: ''
      });
    } else {
      return this.setState({
        bookings: FakeBookings,
        inputID: ''
      });
    }
  };

  customerName = () => {
    if (this.state.inputName !== '') {
      var filteredBookings = FakeBookings.filter(booking => {
        return (booking.firstName + " " + booking.surname) === this.state.inputName
      });
      this.setState({
        bookings: filteredBookings,
        inputName: ''
      })
    } else {
      return this.setState({
        bookings: FakeBookings,
        inputName: ''
      });
    }
  };


  render() {

    return (
      <div className="App-content">
        <div className="container">
          <Search clickById={this.clickById}
            clickName={this.clickName}
            bookingsById={this.bookingsById}
            customerName={this.customerName}
            inputID={this.state.inputID}
            inputName={this.state.inputName}
          />
          <Results result={this.state.bookings} />

        </div>
      </div>
    );
  };
};



export default Bookings;