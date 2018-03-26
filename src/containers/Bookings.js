import React, { Component } from "react";
import Search from "../components/Search.js";
import SearchResult from "../components/SearchResult.js";

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      show: false,
      isLoading: true,
      err: null,
      selected: [],
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
      show: !doesShow
    });
  };

  select = e => {
    const selectedIndex = parseInt(e.currentTarget.dataset.index, 10);
    console.log(this.state.selected);
    if (this.state.selected.includes(selectedIndex)) {
      this.state.selected = this.state.selected.filter(selected => {
        return selected !== selectedIndex;
      });
    } else {
      this.state.selected.push(selectedIndex);
    }
    this.setState({
      selected: this.state.selected
    });
  };

  sortBy = key => {
    this.setState({
      data: this.state.data.sort(
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
        console.log(data);
        this.setState({
          isLoading: false,
          data: data.rows
        });
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
      result = (
        <SearchResult
          data={this.state.data}
          sortBy={this.sortBy}
          select={this.select}
          selected={this.state.selected}
        />
      );
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
