import React, { Component } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";
import AddBooking from "./AddBooking.js";

const titles = [
  ["ID", "id"],
  ["Title", "title"],
  ["First Name", "firstName"],
  ["Surname", "surname"],
  ["E-mail", "email"],
  ["Room ID", "roomId"],
  ["Check-in Date", "checkInDate"],
  ["Check-out Date", "checkOutDate"],
  ["Night Stay", "nightStay"]
];

const fetchURLs = [
  "https://cyf-react.glitch.me/",
  "https://cyf-react.glitch.me/delayed",
  "https://cyf-react.glitch.me/error"
];

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null,
      fakeBookings: [],
      searchVal: ""
    };
  }

  componentDidMount() {
    fetch(fetchURLs[0])
      // fetch(fetchURLs[1])
      // fetch(fetchURLs[2])
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          throw new Error("HTTP error");
        }
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.setState({
          isLoading: false,
          fakeBookings: data
        });
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          error: err
        });
      });
    console.log(this.state.err);
  }

  displayAllBookings = () => {
    this.setState({ searchVal: " " });
  };

  search = searchVal => {
    this.setState({ searchVal: searchVal });
  };

  addBooking = newBooking => {
    this.setState({
      fakeBookings: this.state.fakeBookings.concat(newBooking)
    });
  };

  render() {
    if (this.state.isLoading) {
      return <span>Loading... 👽</span>;
    } else if (this.state.error) {
      return <span>Something went wrong 😭</span>;
    } else {
      const formFields = titles.slice(1, -1);
      return (
        <div className="App-content">
          <div className="container">
            <Search
              search={this.search}
              displayAllBookings={this.displayAllBookings}
            />
            <SearchResults
              results={this.state.fakeBookings.filter(booking =>
                this.state.searchVal
                  ? booking.firstName === this.state.searchVal ||
                    booking.surname === this.state.searchVal
                  : true
              )}
              headerTitles={titles}
            />
            <hr />
            <AddBooking
              formFields={formFields}
              id={this.state.fakeBookings.length}
              handleBooking={this.addBooking}
            />
          </div>
        </div>
      );
    }
  }
}
