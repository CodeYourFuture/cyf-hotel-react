import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
import * as FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  constructor(props){
    super(props);
      this.state= {results:[]};


  }
  
  searchId = () => {
    this.setState({results:FakeBookings}) 
    console.info("to do!");
  };
  searchName = () => {
    this.setState({results:FakeBookings}) 
    console.info("not to do!");
  };
  sortBy = (colum)=>{
    FakeBookings.sort((a,b)=>{if(a[colum]>b[colum]){return 1}})
    this.setState({results:FakeBookings})
  }
  
  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} handleSearchId={this.searchId} handleSearchName={this.searchName} />
          {/* <Search  />  */}
          <Results  results={this.state.results}  sortBy={this.sortBy}/> 
        </div>
      </div>
    );
  }
}
