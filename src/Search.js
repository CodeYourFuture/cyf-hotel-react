import React, { Component } from "react";
import PrimaryButton from "./PrimaryButton";

class Search extends Component {

input = (inputEl) => {
    this.inputRef = inputEl
}

  handleSubmit = event => {
    event.preventDefault()
    return this.props.search(this.inputRef.value);
  }



render(){

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={this.handleSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer Id"
                ref={this.input}
              />
            </div>
            <PrimaryButton buttonText="Search" />
          </form>
        </div>
      </div>
    </div>
  );
}

};

export default Search;
