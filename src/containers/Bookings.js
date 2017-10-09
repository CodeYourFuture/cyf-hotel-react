import React, { Component } from "react";
import Search from "../components/Search.js";
import ResultsTable from '../components/ResultsTable'
// import Results from "../components/Results.js";
import FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {isClicked:false};
  }
  search = () => {
    console.info("to do!");
  };

  handleBookings(){
    if(this.state.isClicked===true){
      return FakeBookings
    }else {
      return [];
    }
  }

  onClicked= () =>{
    this.setState({
     isClicked: true});
  }

  render() {
    return (
      <div className="App-content">
            <div className="container">
          <Search handleSearch={this.search} handleClick={this.onClicked} />
          <ResultsTable bookings={this.handleBookings()} />
          {/* <Results results={this.state.results} /> */}
        </div>
      </div>
    );
  }
}
