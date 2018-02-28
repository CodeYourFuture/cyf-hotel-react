import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
import FakeBookings from '../data/fakeBookings.json'


export default class Bookings extends Component {
  state = {
    fake: [],
    heading: [],
    showResult: false,
    sort: false
  }

  search = () => {
    console.info("to do!");
  };

  toggleResultHandler = () => {
    console.log(FakeBookings)
    let isShowResult = this.state.showResult;
    this.setState({
      fake: FakeBookings,
      heading: ['Title', 'First name', 'Surname', 'Email', 'Room id', 'Check in date', 'Check out date', 'Length of stay'],
      showResult: !isShowResult
    });
    // console.log(this.setState.showResult)
  }

  toggleColumn = (e)=> {
    console.log(e.currentTarget.innerHTML);
    let val = e.currentTarget.innerHTML;    
    let isSorted = this.state.sort;
    console.log(isSorted)
    this.setState({
      sort: !isSorted
    });
    console.log(isSorted) 
    this.sortColumn(val); 
  }

  sortColumn = () => {
    if (this.state.sort) {
      this.setState({
        fake: FakeBookings.sort(function (a, b) {
          var nameA = a.surname, nameB = b.surname
          if (nameA < nameB) //sort string ascending
            return -1
          if (nameA > nameB)
            return 1
          return 0 //default return value (no sorting)
        })
      });
    } else {
      this.setState({
        fake: FakeBookings.sort(function (a, b) {
          var nameA = a.surname, nameB = b.surname
          if (nameA < nameB) //sort string ascending
            return 1
          if (nameA > nameB)
            return -1
          return 0 //default return value (no sorting)
        })
      })
    }

  }
  // ('checkOutDate', 'email', 'firstNameroomId', 'surnametitle')
  render() {
    let results = null;
    if (this.state.showResult) {
      results = (<Results bookingsItems={this.state.fake} resultHeading={this.state.heading} sortColumn={this.toggleColumn} />);

    }
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} click={this.toggleResultHandler} />
          {results}
        </div>
      </div>
    );
  }
}
