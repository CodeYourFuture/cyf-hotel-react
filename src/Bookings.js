import React, { Component } from "react";
import Search from "./Search.js";
 import SearchResults from './SearchResults.js';
import BookingForm from "./BookingForm";

export default class Bookings extends Component {
  constructor(props){
    super(props);
    this.state = {
      Bookings: [],
      searchResult: [],
      isLoading: true,
      error:null
    };
  }
  search = searchVal => {
    const searchResult =this.state.Bookings.filter(booking => {
        return (
          booking.surname.toLowerCase().includes(searchVal.toLowerCase()) || booking.firstName.toLowerCase().includes(searchVal.toLowerCase())
        )
      })
    this.setState({ searchResult })
    //console.info("TO DO!", searchVal);
    
  };
  componentDidMount(){
    fetch("https://cyf-react.glitch.me")
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          throw new Error("HTTP error");
        }
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          Bookings: data,
          searchResult: data,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          error: error
        });
      });
  }
addBooking =(newBooking)=>{
 // console.log(newBooking)
this.setState({
  searchResult:[...this.state.searchResult, newBooking]
})
}
  render() {
    if (this.state.isLoading){
      return (
        <h2 className="loading__status">
          <span>
              Booking Data:
              <div>
                <img
                  src="https://i.postimg.cc/wjWFdtfS/tenor.gif"
                  alt="loading"
                />
              </div>
          </span>
        </h2>
      )
    }
    else if (this.state.error) {
      return (
        <h5 className="error__message">
          Something went wrong
          <span role="img" aria-label="loading__error">
             😭
          </span>
          Unable to load Data! <br /> please refresh the page or try again
        </h5>
      );
    }
    else {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          <SearchResults Bookings={this.state.searchResult} /> 
          <BookingForm addBooking={this.addBooking} />
        </div>
      </div>
    );
    }
  }
}