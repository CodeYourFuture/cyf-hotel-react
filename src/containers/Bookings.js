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
      show : false,
      direction: {
        surname: 'asc',
        email: 'asc'
      }
    }

  }
  

  sortBy = (key) => {
    console.log(key)
    this.setState({
      
      data: FakeBookings.sort( (a, b) => (
        this.state.direction[key] === 'asc'
          ? (a[key]) < (b[key])
          : (b[key]) < (a[key]) 
      )),
      direction: {
        [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
      }
    })
  }



  toggleHandler = () => {
    console.log(FakeBookings);

    let doesShow = this.state.show;
    this.setState( { data: FakeBookings,
                     show: !doesShow } );
  }

  render() {

  let result = null;
  
    if(this.state.show){
      result = ( <SearchResult 
        data = {this.state.data}
        sortBy={this.sortBy}
        />);
    }

    return (
      <div className="App-content">
        <div className="container">
          <Search toggle={this.toggleHandler} />

         {result}
        
        </div>
      </div>
    );
  }
}
