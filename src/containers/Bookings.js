import React, { Component } from "react";
import Search from "../components/Search.js";
import SearchResult from "../components/SearchResult.js";
import FakeBookings from "../data/fakeBookings.json"
// import Results from "../components/Results.js";
// import * as FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  constructor(props){
    super(props)
    this.state = {
      data : [],
      show : false
    }
  }

  search = () => {
    console.info("to do!");
  };
  
  togglePersonsHandler = () => {
    console.log(FakeBookings);

    let doesShow = this.state.show;
    this.setState( { data: FakeBookings,
                     show: !doesShow } );
  }

  render() {

  let result = null;
  
    if(this.state.show){
      result = ( <SearchResult data = {this.state.data}/>);
    }

    return (
      <div className="App-content">
        <div className="container">
          <Search toggle={this.togglePersonsHandler} />

         {result}
        
        </div>
      </div>
    );
  }
}
