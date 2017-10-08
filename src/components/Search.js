import React, { Component } from "react";
import Button from "./Button.js";


class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = {searchText: ''};
  }
  
  handleSearchChange(event) {
    this.setState({searchText: event.target.value});
  }

  render() {
    return (
      <div className="search">
        <div className="page-header">
          <h4 className="text-left">Search Bookings</h4>
        </div>
        <div className="row">
          <div className="col">
            <table className="table search-table">
              <thead>
                <tr>
                  <th>Customer id</th>
                  <th />
                  <th></th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      id="customerId"
                      type="text"
                      className="form-control"
                      placeholder="Customer id"
                      nameButton="customerId"
                      onChange={ this.handleSearchChange }
                    />
                  </td>
                  <td>
                    <Button handleClick={ this.props.handleSearchIdClick } name="Search IDs" />
                    &nbsp;
                    <Button handleClick={ this.props.handleSearchNameClick } name="Search name" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
