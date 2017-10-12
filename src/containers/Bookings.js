import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
// import Results from "../components/Results.js";
import * as FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  constructor (props){
    super(props);
    this.state = {
      results : FakeBookings,
      ASC:false,
      DEC:false
    };
}

  search = (input) => {
    // console.info("to do!");
    this.setState({results: FakeBookings.filter(function(x){
      return ((x.firstName===input)|| (x.id===input)) 
    })})
  };
  
  sortByIdASC = () =>{
    this.setState({
      ASC:true,
      DEC:false
    });
    return this.state.results.sort(function(a,b){
        return a.id - b.id
      
    })
  }

  sortByIdDEC = () => {
    this.setState({
      DEC:true,
      ASC:false
    })
    return this.state.results.sort(function(a,b){
      return b.id - a.id
  })
  }
 clickSort = (event) =>{
   this.setState(this.sortByIdDEC());
   if (this.state.DEC){
     this.setState(this.sortByIdASC())
   }

  }

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          {/* <Results/> */}
          <Results results={this.state.results}  clickSort={this.clickSort}/>
        </div>
      </div>
    );
  }
}
