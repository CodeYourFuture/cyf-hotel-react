import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
import FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  state = { reservations: FakeBookings };

  search = () => {
    console.info("to do");
    this.setState({ reservations: FakeBookings });
  };

  filteredItemHandler = e => {
    const UserInput = e.target.value;
    console.log(UserInput);
    const myResult = FakeBookings.filter(singleReservation => {
      console.log(UserInput);
      console.log(singleReservation.id);
      return (
        UserInput == singleReservation.id ||
        UserInput == singleReservation.firstName ||
        UserInput == singleReservation.surname
      );
    });
    this.setState({ reservations: myResult });
  };

  selectColumnHandler = e => {};

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search
            search={this.search}
            UserInput={this.filteredItemHandler}
            sera={"okay"}
          />
          <Results reservations={this.state.reservations} />
        </div>
      </div>
    );
  }
}
