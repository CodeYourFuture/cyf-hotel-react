import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
// import * as FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  search = () => {
    console.info("to do!");
  };
  
  render() {
    const results = [
      {
        "title": "Mr",
        "firstName": "Person1",
        "surname": "Else",
        "email": "Person1@else.com",
        "roomId": 1,
        "checkInDate": "2017-11-21",
        "checkOutDate": "2017-11-28"
      },
      {
        "title": "Mrs",
        "firstName": "Person2",
        "surname": "Else",
        "email": "Person2@else.com",
        "roomId": 2,
        "checkInDate": "2017-11-21",
        "checkOutDate": "2017-11-28"
      },
    ];
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          <Results results={results} />
        </div>
      </div>
    );
  }
}
