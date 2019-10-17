import React, { Component } from "react";
import Button from "./components/Search-Button";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }
  handleSearchInput = () => {
    this.setState({
      searchInput: event.target.value
    });
  };
  render() {
    return (
      <div className="search">
        <div className="page-header">
          <h4 className="text-left">Search Bookings</h4>
        </div>
        <div className="row search-wrapper">
          <div className="col">
            <form className="form-group search-box">
              <label htmlFor="customerName">Customer name</label>
              <div className="search-row">
                <input
                  type="text"
                  id="customerName"
                  className="form-control"
                  placeholder="Customer Id"
                  value={this.state.searchInput}
                  onChange={this.handleSearchInput}
                />
                <Button />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
