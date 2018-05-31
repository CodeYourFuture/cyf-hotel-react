import React, { Component } from "react";
import Search from "../components/Search.js";
import BookingsMessage from "../components/BookingsMessage.js";
import Results from "../components/Results.js";
import fakeBookings from "../data/fakeBookings.json";
import Counter from "../components/Counter";

export default class Bookings extends Component {
  state = {
    count: 0,
    count2: 0,
    sum: 0,
    input: 0,
    bookings: fakeBookings
  };

  userInput = e => {
    e.preventDefault();
    this.setState({
      input: parseInt(e.target.value, 10)
    });
  };

  getBookingsById = () => {
    this.setState({
      bookings: fakeBookings.filter(booking => {
        return booking.id === this.state.input;
      })
    });
  };

  increase = () => {
    this.setState((prevState, props) => ({
      count: ++prevState.count,
      sum: ++prevState.sum
    }));
  };

  increase2 = () => {
    this.setState((prevState, props) => ({
      count2: ++prevState.count2,
      sum: ++prevState.sum
    }));
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <BookingsMessage />
          <Search userInput={this.userInput} getBookingsById={this.getBookingsById} />
          Results: {this.state.bookings.length}
          <Results results={this.state.bookings} />
          Sum: {this.state.sum}
          <br />
          {this.state.count}
          <Counter name="Counter 1" onIncrease={this.increase} />
          {this.state.count2}
          <Counter name="Counter 2" onIncrease={this.increase2} />
        </div>
      </div>
    );
  }
}
