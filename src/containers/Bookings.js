import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
import bookings from "../data/fakeBookings.json";
export default class Bookings extends Component {
  state = {
    filteredRsults: undefined,
    error: undefined,
    numberOfBookingsFound: undefined
  };
  returnResult = (valueEntered, searchMethod) => {
    if (valueEntered && valueEntered.trim()) {
      this.setState(() => {
        if (bookings.length > 0) {
          if (searchMethod === "ID") {
            let filteredRsults = bookings.filter(
              ({ id }) => valueEntered == id
            );
            return {
              filteredRsults,
              error: null,
              numberOfBookingsFound: filteredRsults.length
            };
          } else if (searchMethod === "NAME") {
            return {
              filteredRsults: bookings.filter(
                ({ firstName, surname }) =>
                  valueEntered.toLowerCase() === firstName.toLowerCase() ||
                  valueEntered.toLowerCase() === surname.toLowerCase()
              ),
              error: null
            };
          }
        }
      });
    } else {
      this.setState({
        filteredRsults: null,
        error: "Please enter a value!"
      });
    }
  };
  searchHandler = e => {
    e.preventDefault();
    let valueEntered;
    if (e.target.enteredId) {
      valueEntered = e.target.enteredId.value;
      e.target.enteredId.value = null;
      this.returnResult(valueEntered, "ID");
    } else if (e.target.enteredName) {
      valueEntered = e.target.enteredName.value;
      e.target.enteredName.value = null;
      this.returnResult(valueEntered, "NAME");
    }
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search searchHandler={this.searchHandler} />
          {this.state.error && (
            <div className="errorMsg"> {this.state.error} </div>
          )}
          {this.state.filteredRsults ? (
            <div>
              {this.state.numberOfBookingsFound && (
                <p>
                  found(
                  {this.state.numberOfBookingsFound})
                </p>
              )}
              <Results results={this.state.filteredRsults} />
            </div>
          ) : (
            !this.state.error && "No results found!!"
          )}
        </div>
      </div>
    );
  }
}
