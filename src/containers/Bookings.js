import React, { Component } from "react";
import Search from "../components/Search.js";
import Result from "../components/Result.js";
import fakeBooking from "../data/fakeBookings"

// import Results from "../components/Results.js";
// import * as FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  state = {
    isClicked : false,
    fakeData: fakeBooking
  };

   isClicked = () => {
    this.setState({isClicked : !this.state.isClicked})
  };

  render() {
   
    return (
    <div className='App-content'>
      <div className='container'>
       <div className='row'>
         <div className='col-md-6'>
          <Search isClicked={this.isClicked} />
         </div>
         <div className='col-md-6'>
          <Search isClicked={this.isClicked} />
         </div>
        </div>
        {this.state.isClicked ? <Result result={this.state.fakeData}/>: "NO Result"}
      </div>
    </div>
    );
  }
}
