import React, { Component } from "react";
import Search from "./Search.js";
import SearchResults from './SearchResults.js';

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = { results: null, errorMessage: null }
  }


  /***componentDidMount***/
  componentDidMount() {
    fetch("https://cyf-react.glitch.me/delayed").then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json()
      } else {
        throw new Error("HTTP error")
      }
      //return response.json()

    }
    ).then(result => {
      console.log(result)
      this.setState({ results: result })
    }).catch(error => {
      this.setState({ errorMessage: error })
    })
  }

  addBooking = (data) => {
    this.setState(previousState => {
      return {
        results: previousState.results.concat(data)
      }
    })
  }
  /****Search***/
  search = searchVal => {
    console.info("TO DO!", searchVal);
    this.setState((previousState => {
      return {
        results: previousState.results.filter(booking =>
          this.isEqualToFirstNameOrSurname(booking.firstName, booking.surname, searchVal))
      }
    }), () => {
      console.log(this.state.results)
    })
  };

  /*** This method compare the first name or surname  if any of them equal to searchVal ***/
  isEqualToFirstNameOrSurname = (firstName, surName, searchVal) => {
    return firstName === searchVal || surName === searchVal;
  }
  render() {
    if (this.state.results) {
      return (
        <div className="App-content">
          <div className="container">
            <Search search={this.search} />
            <SearchResults results={this.state.results} addBooking={this.addBooking} />
          </div>
        </div>
      );
    } else if (this.state.errorMessage) {
      return (
        <div className="alert alert-danger" role="alert">
          Can not fetch booking data the following error accured:
           <a href="#" className="alert-link">{this.state.errorMessage.toString()}</a>
        </div>);
    } else
      return (
        <div className="text-center ">
          <br />
          <br />

          <div className="spinner-border text-dark" role="status">
            <span className="text-danger">Loading...</span>
          </div>
          <br />
          <br />
        </div>
      );

  }
}
