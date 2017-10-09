import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";

// import Results from "../components/Results.js";
import * as FakeBookings from "../data/fakeBookings.json";



export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = { searched: false };
    this.bookingData = null;
  }

  
  handleSearchButtonClicks = (e, filter) => {
    if (filter.customerId) {
      this.bookingData = FakeBookings.filter(booking => booking.customerId = filter.customerId);
    } else if (filter.customerName) {
      this.bookingData = FakeBookings.filter(booking => booking.firstName.includes(filter.customerName));
    } else {
      this.bookingData = [...FakeBookings];
    }
    this.addNumberOfDays();
    this.setState({searched: true});
  };

  addNumberOfDays = () => {
    let newBookingData = this.bookingData.map((row, idx) => {
      let newRow = JSON.parse(JSON.stringify(row));

      newRow.numberOfDays = Math.ceil((Date.parse(row.checkOutDate) - Date.parse(row.checkInDate)) / (24 * 3600000));
      newRow.uid = idx;
      return newRow;
    });
    this.bookingData = newBookingData;
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} runSearch={this.handleSearchButtonClicks} />
          <Results bookingResults={this.bookingData} />
        </div>
      </div>
    );
  }
}
