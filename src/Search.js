import React, { Component } from "react";
import Button from "./Button";

class Search extends Component {
  setInputRef = input => {
    this.input = input;
  };

  //focusInput = () => {
  //this.input.focus();
  //};
  handleSubmit = event => {
    console.log(this.input.value);
    event.preventDefault(); // Prevents form submission
    this.props.search(this.input.value);
  };
  render() {
    return (
      <div className="search">
        <div className="page-header">
          <h4 className="text-left">Search Bookings</h4>
        </div>
        <div className="row search-wrapper">
          <div className="col">
            <form
              onSubmit={this.handleSubmit}
              className="form-group search-box"
            >
              <label htmlFor="customerName">Customer name</label>
              <div className="search-row">
                <input
                  ref={this.setInputRef}
                  type="text"
                  id="customerName"
                  className="form-control"
                  placeholder="Customer Id"
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
