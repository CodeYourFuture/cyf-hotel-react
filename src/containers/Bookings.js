import React, { Component } from "react";
import Search from "../components/Search.js";
import TableRow from "../components/TableRow.js";
import TextInput from "../components/TextInput.js";
import CustomerName from "../components/CustomerName.js";
import * as fakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  constructor(props){
    super(props)
    this.state= {
      TableRow : []
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
          <TableRow TableRow={fakeBookings} /> 
           {/* <TextInput bookings={this.handleBookings()} sortIt = {this.sortIt}/> */}
        </div>
      </div>
    );
  }
}

  // handleBooking () {
  //   if(this.state.onClick===true){
  //     return this.state.bookings;
  //   }else {
  //     return [];
  //   }
  // }

   const onClick = () => {
    this.setState({
     onClick: true,
   });
  }
  const sortIt = (sorttitle) => {
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


