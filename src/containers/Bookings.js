import React, { Component } from "react";
import Search from "../components/Search.js";
import SearchResult from "../components/SearchResult.js";
// import FakeBookings from "../data/fakeBookings.json";

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      newData: [],
      show: false,
      direction: {
        surname: "asc",
        email: "asc",
        firstname: "asc",
        title: "asc"
      }
    };
  }

  toggleHandler = () => {
    let doesShow = this.state.show;
    this.setState({
      data: this.state.newData.rows,
      show: !doesShow
    });
    console.log(this.state.data);
  };
  sortBy = key => {
    this.setState({
      data: this.data.sort(
        (a, b) =>
          this.state.direction[key] === "asc"
            ? a[key] < b[key]
            : b[key] < a[key]
      ),
      direction: {
        [key]: this.state.direction[key] === "asc" ? "desc" : "asc"
      }
    });
  };

  componentDidMount() {
    fetch(`http://localhost:8080/api/reactclass`)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          throw new Error("HTTP error");
        }
      })
      .then(res => res.json())
      .then(data => {
        let doesShow = this.state.show;
        this.setState({
          newData: data,
          show: !doesShow
        });
        console.log(this.state.newData);
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          err: err
        });
      });
  }

  render() {
    let result = null;

    if (this.state.show) {
      result = <SearchResult data={this.state.data} sortBy={this.sortBy} />;
    }

    return (
      <div className="App-content">
        <div className="container">
          <Search toggle={this.toggleHandler} />

          {result}
        </div>
      </div>
    );
  }
}
