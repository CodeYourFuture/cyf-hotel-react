import React, { Component } from "react";
import Search from "../components/Search.js";
// import Results from '../components/Results.js';
import Results from "../components/Results.js";

// import FakeBookings from '../data/fakeBookings.json';
import allBookings from "../data/fakeBookings.json";
export default class Bookings extends Component {
  updateBookingsToDisplay = (input) => {
    this.setState({ bookingsToDisplay: allBookings.filter(x => x.id === parseInt(input, 10))})
  };
  updateBookingsToDisplay2 =(input) =>{
    this.setState({
      bookingsToDisplay: allBookings.filter(
        x => (x.firstName +' '+ x.surname) === input
      )
    });

  };
  constructor(props) {
    super(props);
    this.state = {
      bookingsToDisplay: allBookings
    };
    this.updateBookingsToDisplay = this.updateBookingsToDisplay.bind(this);
    this.updateBookingsToDisplay2 = this.updateBookingsToDisplay2.bind(this);
  }
  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search onSearchClicked={this.updateBookingsToDisplay}  onSearchClickedByName = {this.updateBookingsToDisplay2}/>
          {/* <Results results={this.state.results} /> */}
          <Results results={this.state.bookingsToDisplay} />
        </div>
      </div>
    );
  }
}
