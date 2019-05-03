import React, {Component} from "react";
import Button from "./Button";

class Search extends Component {
  setInput = input => {
    this.input = input;
  };
  handleSubmit = event => {
    this.props.search( this.input.value)
    //console.log(this.input.value);
    event.preventDefault();
    // Prevents form submission
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
                  type="text"
                  id="customerName"
                  className="form-control"
                  ref={this.setInput}
                  placeholder="Customer Id"
                />
                <Button type={"Search IDs"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Search;
