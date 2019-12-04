import React from "react";
import Button from "./Button";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  handleSearchInput = event => {
    this.setState({ searchInput: event.target.value });
  };

  handleSubmit = event => {
    this.props.search(this.state.searchInput);
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
              className="form-group search-box"
              onSubmit={this.handleSubmit}
            >
              <label htmlFor="customerName">Customer name</label>
              <div className="search-row">
                <input
                  type="text"
                  id="customerName"
                  className="form-control"
                  value={this.state.searchInput}
                  onChange={this.handleSearchInput}
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
