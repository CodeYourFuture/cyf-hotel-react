import React, { Component } from 'react';
import Search from '../components/Search.js';
import Result from '../components/Result.js';
import FakeBookings from '../data/fakeBookings.json';

export default class Bookings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookingResult: [],
      searchById: "",
      searchByName: ""
    }
  }
  captureID = (event) => {
    this.setState({
      searchById: parseInt(event.target.value)
    })
  }
  captureName = (event) => {
    this.setState({
      searchByName: event.target.value
    })
  }
  search = () => {
    const booking = []
    FakeBookings.map(item => {
      if (item.id === this.state.searchById || item.firstName === this.state.searchByName || item.surname === this.state.searchByName) {
        booking.push(item)
        this.setState({
          bookingResult: booking
        })
      }

    })
  };

  render() {
    console.log(this.state)
    return (
      <div className="App-content">
        <div className="container">
          <Search
            search={this.captureID}
            search2={this.captureName}
            secondSearching={this.search}
          />
          <Result booking={this.state.bookingResult} />
        </div>
      </div>
    );
  }
}
