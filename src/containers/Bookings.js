import React, { Component } from "react";
import Search from "../components/Search.js";
import ResultsTable from '../components/ResultsTable'
// import Results from "../components/Results.js";
import FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      bookings: FakeBookings,
      selected  : false
    };
  }
  search = () => {
    console.info("to do!");
  };

  handleBookings(){
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
  sortIt = (thing) => {
    console.log('thing:', thing)
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
  // selectedRows = (){
  //   var selectedNumRows = 0;
  //   if (this.state.selected===true){
  //     selectedNumRows=+;
  //   }
  // 
  // }
  render() {
    return (
      <div className="App-content">
            <div className="container">
          <Search handleSearch={this.search} handleClick={this.onClicked} />
          <ResultsTable bookings={this.handleBookings()} sortIt = {this.sortIt}/>
          {/* <Results results={this.state.results} /> */}
        </div>
      </div>
    );
  }
}
