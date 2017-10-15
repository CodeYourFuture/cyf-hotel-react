import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
import Resulttable from "../components/Resulttable.js";
import * as FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  constructor(props){
    super(props)
    this.state= {
      results : []
    }
  }

  search = () => {
    console.info("to do!");
  };
  
  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search}/>
          <Results results={FakeBookings} /> 
           <Resulttable bookings={this.handleBookings()} sortIt = {this.sortIt}/>
        </div>
      </div>
    );
  }
}

  handleBookings() {
    if(this.state.isClicked===true){
      return this.state.bookings
    }else {
      return [];
    }
  }

  onClicked = () => {
    this.setState({
     isClicked: true,
   });
  }
  sortIt = (sorttitle) => {
    const bookings = this.state.bookings
    const sortedBookings = this.state.bookings.sort()
    if (sortedBookings === bookings) {
      this.setState({
        bookings: bookings.reverse()
      })
    } else {
      this.setState({
        bookings: sortedBookings
      })
    }
  }


