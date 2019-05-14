import React, { Component } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    fetch("https://cyf-react.glitch.me/")
      .then(res => {
        try {
          if (res.status >= 200 && res.status <= 299) {
            return res.json();
          }
        } catch (error) {
          return error;
        }
      })

      .then(res => {
        this.setState({ data: res });
      }).catch(error => console.log(error));
  }
  search = searchVal => {
    this.setState(previousState => {
      return {
        data: previousState.data.filter(
          data => searchVal === data.firstName || searchVal === data.surname
        )
      };
    });
  };

  render() {
    if (this.state.data) {
      return (
        <div className="App-content">
          <div className="container">
            <Search search={this.search} />
            <SearchResults results={this.state.data} />
          </div>
        </div>
      );
    } else {
      return <div>The application is loading</div>;
    }
  }
}
