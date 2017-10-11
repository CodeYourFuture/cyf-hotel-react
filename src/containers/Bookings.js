import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
// import Results from "../components/Results.js";
import * as FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  constructor (props){
    super(props);
    this.state = {
      results : FakeBookings
    };
}

  search = (input) => {
    // console.info("to do!");
    this.setState({results: FakeBookings.filter(function(x){
      return ((x.firstName===input)|| (x.id===input)) 
    })})
  };
  

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          {/* <Results/> */}
          <Results results={this.state.results} />
        </div>
      </div>
    );
  }
}
