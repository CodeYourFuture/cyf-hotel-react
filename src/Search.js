import React, { Component } from "react";
import Button from "./Button";

class Search extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  handleSubmit = event => {
    this.props.search(this.textInput.current.value);

    event.preventDefault();
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
                  type="text"
                  id="customerName"
                  className="form-control"
                  placeholder="Customer Id"
                  ref={this.textInput}
                />
                <Button content="Search IDs" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
