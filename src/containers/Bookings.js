import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
import FakeBookings from "../data/fakeBookings.json";
// import BookingCounter from "../components/BookingCounter.js";
import Button from "../components/Button.js";

export default class Bookings extends Component {
  constructor() {
    super();
    this.state = { input: 0, bookings: FakeBookings };
  }

  // search = () => {
  //   console.info("TO DO!");
  // };

  userInput = event => {
    event.preventDefault();
    this.setState({
      input: parseInt(event.target.value, 10)
    });
    
  };

  bookingsById = () => {
    this.setState({
      bookings: FakeBookings.filter(booking => {
        return booking.id === this.state.input;
      })
    });
  };

  render() {
    return <div className="App-content">
        <div className="container">
          <Search userInput={this.userInput} bookingsById={this.bookingsById} />
          {/* {console.log()} */}
          <Results results={this.state.bookings} />
        </div>
      </div>;
  }
}
