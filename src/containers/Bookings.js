import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
//import FakeBookings from "../data/fakeBookings.json";
import Api from "../Api.js";

export default class Bookings extends Component {
  state = { reservations: [] };

  componentDidMount() {
    Api.getReservations().then(reservationsDataFromApi => {
      console.log(reservationsDataFromApi, "reservationsDataFrom");
      this.setState({
        reservations: reservationsDataFromApi.reservations
      });
    });
  }

  search = () => {
    console.info("to do");
    // this.setState({ reservations: thisreservationsDataFromApi });
  };

  filteredItemHandler = e => {
    const UserInput = e.target.value;
    console.log(UserInput);
    const myResult = this.state.reservations.filter(singleReservation => {
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
    console.log(this.state.reservations);
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
