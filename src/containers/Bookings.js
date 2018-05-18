import React, { Component } from 'react';
import Search from '../components/Search.js';
import BookingsMessage from '../components/BookingsMessage.js';
import Results from '../components/Results.js';
import fakeBookings from '../data/fakeBookings.json';
import Counter from '../components/Counter'

export default class Bookings extends Component {
 
  state = {
    count: 0,
    count2: 0,
    sum: 0,
    bookings: fakeBookings
  }

  userInput = (e) => {
    console.log(e.target.value);
  };

  increase = () => {
    this.setState({
      count: ++this.state.count,
      sum: ++this.state.sum
    });
  };

  increase2 = () => {
    this.setState({
      count2: ++this.state.count2,
      sum: ++this.state.sum
    });
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <BookingsMessage />
          <Search userInput={this.userInput} />
          <Results results={this.state.bookings} />
          Sum: {this.state.sum}
          <br />
          {this.state.count}
          <Counter name="Counter 1" increase={this.increase} />
          {this.state.count2}
          <Counter name="Counter 2" increase={this.increase2} />
        </div>
      </div>
    );
  }
}
