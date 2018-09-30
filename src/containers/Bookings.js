import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
// import bookings from "../data/fakeBookings.json";
let bookings;
export default class Bookings extends Component {
  state = {
    filteredRsults: undefined,
    error: undefined,
    numberOfBookingsFound: undefined,
    isLoading: true
  };
  componentDidMount() {
    fetch(`http://localhost:8080/api/hw/bookings`)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          throw new Error("HTTP error");
        }
      })
      .then(res => res.json())
      .then(({ results }) => {
        console.log("kehtnn", results);
        bookings = results;
        this.setState({ isLoading: false, filteredRsults: results });
      })
      .catch(err => {
        this.setState({ isLoading: false, err: err });
      });
  }
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
            let filteredRsults = bookings.filter(
              ({ first_name, surname }) =>
                valueEntered.toLowerCase() === first_name.toLowerCase() ||
                valueEntered.toLowerCase() === surname.toLowerCase()
            );
            return {
              filteredRsults,
              error: null,
              numberOfBookingsFound: filteredRsults.length
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
    const template = (
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
    );
    return (
      <div className="App-content">
        {this.state.isLoading ? <p> Loading.. </p> : template}
      </div>
    );
  }
}
