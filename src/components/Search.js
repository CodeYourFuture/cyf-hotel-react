import React from "react";
import Button from "./Button.js";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return <div className="search">
        <div className="page-header">
          <h4 className="text-left">Search Bookings</h4>
        </div>
        <div className="row search-wrapper">
          <div className="col">
            <div className="form-group search-box">
              <label htmlFor="customerId">Customer Id</label>
              <div className="search-row">
                <input type="text" id="customerId" className="form-control" placeholder="Customer Id" onChange={this.handleChange} />
                <Button name="Search IDs" onClick={() => this.props.onSearchClicked(this.state.value)} /> {/* //// */}
              </div>
            </div>
            {/* homework2 - Adding another search */}
            <div className="form-group search-box">
              <label htmlFor="customerId">Customer Name</label>
              <div className="search-row">
                <input type="text" id="customerId" className="form-control" placeholder="Customer Name" onChange={this.handleChange} />
                <Button name="Search Name" onClick={() => this.props.onSearchClickedByName(this.state.value)} />
              </div>
            </div>
            {/* end of homework2 */}
          </div>
        </div>
      </div>;
  }
}
