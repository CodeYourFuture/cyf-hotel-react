import React from "react";
import Search from "./Search";
import Inputs from "./Inputs";
import { SearcResults } from "./SearchResults";

class Bookings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      filteredarray: [],
      bookings: [],
      error: null,
      searching: false
    };
  }
  componentDidMount() {
    fetch("https://cyf-react.glitch.me")
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          throw new Error("HTTP error");
        }
      })
      .then(res => res.json())
      .then(data => this.setState({ bookings: data, isLoading: false }))
      .catch(error => this.setState({ isLoading: false, error: error }));
  }
  search = searchVal => {
    this.setState({
      filteredarray: this.state.bookings.filter(item => {
        return (
          String(item.firstName).toLowerCase() ===
            String(searchVal)
              .trim()
              .toLowerCase() ||
          String(item.surname).toLowerCase() ===
            String(searchVal)
              .trim()
              .toLowerCase()
        );
      })
    });
  };
  //to make the table displayed in case of not searching and disappear in case searching and then display the result on submit
  searching = StartTyping => {
    if (StartTyping === true) this.setState({ searching: true });
  };
  // to push the new array transfered from input file
  addBooking = booking => {
    const updatedBookings = this.state.bookings;
    updatedBookings.push(booking);
    this.setState({ bookings: updatedBookings });
  };
  render() {
    if (this.state.isLoading === true) return <span>LOADING.....</span>;
    else if (this.state.error) return <span>500 HTTP error.</span>;
    else
      return (
        <div className="App-content">
          <div className="container">
            <Search search={this.search} searching={this.searching} />
            {/* to make the table displayed in case of not searching and disappear in case searching and then display the result on submit */}
            {this.state.searching ? (
              <SearcResults fakeBookingsList={this.state.filteredarray} />
            ) : (
              <SearcResults fakeBookingsList={this.state.bookings} />
            )}
            {/* to insert New booking details Row to the table */}
            <Inputs addBooking={this.addBooking} />
          </div>
        </div>
      );
  }
}

export default Bookings;
