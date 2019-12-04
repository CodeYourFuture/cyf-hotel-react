import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

class Bookings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // fakeBookings: FakeBookings,
      // fakeBookings: [],
      bookingInfoResult: []
      // loading: true
    };
  }

  filtered = searchVal => {
    return this.props.fakeBookings.filter(
      element =>
        element.firstName === searchVal || element.surname === searchVal
    );
  };

  search = searchVal => {
    let anotherVar = this.filtered(searchVal);

    this.setState({
      bookingInfoResult: anotherVar
    });
    console.info("TO DO!", searchVal);
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          <SearchResults bookingInfoResult={this.state.bookingInfoResult} />
        </div>
      </div>
    );
  }
}

export default Bookings;
