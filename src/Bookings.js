import React, { Component } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
// import axios from "axios";
import FormBooking from "./components/FormBooking";

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      massegeError: "",
      isTrue: true
    };
  }
  componentDidMount() {
    fetch("http://www.mocky.io/v2/5daae3233100005900becdd4?mocky-delay=5000ms")
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res
        });
      });
  }

  search = (searchVal, e) => {
    e.preventDefault();
    let onItem = FakeBookings.filter(item => {
      return (
        item.firstName.toLowerCase() === searchVal.toLowerCase() ||
        item.surname.toLowerCase() === searchVal.toLowerCase()
      );
    });
    this.setState({ data: onItem });
    console.info("TO DO!", searchVal);
  };
  addCustomer = e => {
    const data = this.state.data.slice();
    e.id = Number(data[data.length - 1].id) + 1;

    if (
      e.title &&
      e.firstName &&
      e.surname &&
      e.roomId &&
      e.email &&
      e.email.includes("@") &&
      e.checkOutDate &&
      e.checkInDate
    ) {
      data.push(e);
      this.setState({ data: data, massegeError: "" });
    } else {
      return this.setState({
        massegeError: "Sorry there are any fields are empty or Error"
      });
    }
  };
  toMakeSort = n => {
    let data = this.state.data.slice();
    let content = n.target.name;
    if (this.state.isTrue) {
      let newSort = data.sort((a, b) => (a[content] > b[content] ? 1 : -1));
      this.setState({
        data: newSort,
        isTrue: !this.state.isTrue
      });
    } else {
      let newSort = data.sort((a, b) => (a[content] < b[content] ? 1 : -1));
      this.setState({
        data: newSort,
        isTrue: !this.state.isTrue
      });
    }
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          <SearchResults
            results={this.state.data}
            massegeError={this.state.massegeError}
            toMakeSort={this.toMakeSort}
            isTrue={this.state.isTrue}
          />
          <FormBooking add={this.addCustomer} />
        </div>
      </div>
    );
  }
}
