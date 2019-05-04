import React, { Component } from "react";
import Button from "./Button";

class Search extends Component {
  setInputRef = input => {
    this.input = input;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.search(this.input.value);
    this.input.value = "";
  };

  render() {
    return (
      <div style={divStyle} className="xs-col-12 sm-col-6">
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
                  placeholder="Customer Name or Surname"
                />
                <Button
                  handleClick={this.props.search}
                  content="Search"
                  style={buttonStyle}
                />
                <Button
                  handleClick={this.props.displayAllBookings}
                  content="Full List"
                  style={buttonStyle}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;

const divStyle = {
  margin: "0 auto"
};

const buttonStyle = { minWidth: "110px", marginTop: "5px" };
