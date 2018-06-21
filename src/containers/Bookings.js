import React, { Component } from 'react';
import Search from '../components/Search.js';
import Results from '../components/Results.js';
// import FakeBookings from '../data/fakeBookings.json';

class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputID: '',
      inputName: '',
      bookingsState: [],
      bookings: []
    };
  };

  componentDidMount() {
    fetch(`http://localhost:3000/api/customers-data/`)
      .then(response => { return response.json() })
      .then(data => {
        let addRowState = data.rows.map((obj) => ({ ...obj, 'isActive': false }));
        this.setState({
          bookingsState: data.rows,
          bookings: addRowState
        });
      });
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
    // const FakeBookings = this.data;
    if (this.state.inputID !== '') {
      var filteredBookings = this.state.bookings.filter(booking => {
        return booking.id === parseInt(this.state.inputID, 10)
      });
      this.setState({
        bookings: filteredBookings,
        inputID: ''
      });
    } else {
      return this.setState({
        bookings: this.state.bookingsState,
        inputID: ''
      });
    }
  };

  customerName = () => {
    // const FakeBookings = this.data;
    if (this.state.inputName !== '') {
      var filteredBookings = this.state.bookings.filter(booking => {
        return (booking.firstname + " " + booking.surname) === this.state.inputName
      });
      this.setState({
        bookings: filteredBookings,
        inputName: ''
      })
    } else {
      return this.setState({
        bookings: this.state.bookingsState,
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