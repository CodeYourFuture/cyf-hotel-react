import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
import * as FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [], direction: 'asc', style: {} };

    this.addNumberOfDays(FakeBookings);
  }


  addNumberOfDays = (FakeBookings) => {
    FakeBookings.map((item) => {
      var d1 = new Date(item.checkInDate)
      var d2 = new Date(item.checkOutDate)
      item.numberOfDays = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));

    })

  };
  



  searchId = () => {
    this.setState({ results: FakeBookings })

    console.info("to do!");
  };
  searchName = () => {
    this.setState({ results: FakeBookings })
    console.info("not to do!");
  };


  sortBy = (key, type) => {
    this.setState({
      results: FakeBookings.sort((a, b) => {
        if (type === 'string') {
          return this.state.direction === 'asc'
            ? (a[key].toLowerCase() > b[key].toLowerCase())
            : (a[key].toLowerCase() < b[key].toLowerCase())
        } else {
          return this.state.direction === 'asc'
            ? (a[key] > b[key])
            : (a[key] < b[key])
        }
      }
      ),
      direction: this.state.direction === 'asc'
        ? 'desc'
        : 'asc'
    })
  }
  toggleSelected = (x) => {
    console.log("test" );
    // TODO: toggle colour if it's already red
    /* something like:

          direction: this.state.direction === 'asc'
        ? 'desc'
        : 'asc'
        it is changing the color of whole tbody to red when I click each part
    */
          this.setState({
            style : {color:"red"}
          })
  }

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} handleSearchId={this.searchId} handleSearchName={this.searchName} />
          {/* <Search  />  */}
          <Results results={this.state.results} sortBy={this.sortBy} toggleSelected={this.toggleSelected} style={this.state.style} />
        </div>
      </div>
    );
  }
}
