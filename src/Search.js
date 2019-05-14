import React, { Component } from "react";
import Button from "./Search-Button";

class Search extends Component {
  state = {
    inputValue: ""
  };
  inputChange = event => {
    this.setState({
      inputValue: event.target.value

    });
    console.log(this.state.inputValue);
  };
  setInputRef = input => {
    this.input = input;
  };

  handleSubmit = event => {
    this.props.search(this.state.inputValue);
    
    event.preventDefault();
    // this.props.search()
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
              className="form-group search-box"
              onSubmit={this.handleSubmit}
            >
              <label htmlFor="customerName">Customer name</label>
              <div className="search-row">
                <input
                  onChange={this.inputChange}
                  type="text"
                  id="customerName"
                  className="form-control"
                  placeholder="Customer Id"
                  ref={this.setInputRef}
                  value={this.state.inputValue}
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
