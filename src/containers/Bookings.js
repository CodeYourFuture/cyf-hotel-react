import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
// import SearchButton from '../components/SearchButton'

import FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: this.data,
      show: [{
        title: "",
        firstName:"",
        surname: "" ,
        email: "" ,
        roomId: "" ,
        checkInDate:"" ,
        checkOutDate: "" 
      }]
    };
    this.toggleContent = this.toggleContent.bind(this);
    // this.sortBy = this.sortBy.bind(this);
  }
  toggleContent = () => {
    // console.log("hello");
    //  const {show} = this.state;
    // this.state.show ? FakeBookings : Null
    this.setState({ show: FakeBookings });
  };
  // sortBy = (key)=>{
  //   this.setState({})
  //   data: data.sort((a,b)=> a > b)

  // }
  // state = {
  //   // searchname: "",
  //   // searchId: "",
  //   // results: [],
  //   data: [],
  //   show: []
  // };
  // setSearchName = event =>{
  //   console.info("searchName",event.target.id);
  // }
  // setSearchId = event =>{
  //   console.info("searchId",event.target.id);
  // }
  // searchAction = event =>{
  //   console.info(event.target.id);
  // }

  search = () => {
    console.info("to do!");
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search
            search={this.searchAction}
            setSearchName={this.setSearchName}
            setSearchId={this.setSearchId}
            toggleContent={this.toggleContent}
          />
          {/* * <SearchByIdResult SearchByIdResult= {this.search}/> */}
          <Results 
          FakeBookings={this.state.show} 
          // sortAble={this.state.sortAble}
          />
          {/* <searchButton  /> */}
        </div>
      </div>
    );
  }
}
