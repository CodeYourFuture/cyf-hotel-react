import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";

// import Results from "../components/Results.js";
import * as FakeBookings from "../data/fakeBookings.json";



export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: {customerId: '', customerName: ''}, bookingData: [], loadingData: false, errorLoadingData: false };
  }

  
  handleSearchButtonClicks = (e) => {
    this.setState({loadingData: true, bookingData: []});
    let url ='http://localhost:8080/api/reservations'
    if (this.state.filter.customerId.length > 0) url += `?id=${this.state.filter.customerId}`;
    if (this.state.filter.customerName.length > 0) url += `?name=${this.state.filter.customerName}`;

    fetch(url)
      .then(res => {
        this.setState({loadingData: true});
        return res.json();
      }).then(data => {
        this.setState({bookingData: this.addNumberOfDays(data.reservations), loadingData: false});
      }).catch(err => {
        this.setState({errorLoadingData: true, loadingData: false});
      });
  };

  getUserSearch = (filter) => {
    this.setState(filter);
  };

  addNumberOfDays = (data) => {
    let newData = data.map((row, idx) => {
      let newRow = JSON.parse(JSON.stringify(row));

      newRow.numberOfDays = Math.ceil((Date.parse(row.checkOutDate) - Date.parse(row.checkInDate)) / (24 * 3600000));
      newRow.uid = idx;
      return newRow;
    });
    return newData;
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} runSearch={this.handleSearchButtonClicks} updateFilter={this.getUserSearch} customerIdInput={this.state.filter.customerId} customerNameInput={this.state.filter.customerName} />
          <Results loadingData={this.state.loadingData} bookingResults={this.state.bookingData} errorLoadingData={this.state.errorLoadingData} />
        </div>
      </div>
    );
  }
}
