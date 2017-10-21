import React, {Component} from 'react';
import Button from "./Button.js";
import CustomerName from "./CustomerName.js";
import Table from "./Table.js";
import fakeBookings from "./../data/fakeBookings";

// const Search = props => (
  class Search extends Component {
    constructor (props){
      super(props);
      this.state = {
       show : false
      };
    }
 handleSearch (event) {
    this.setState({ show : !this.state.show})
}
    render() {
      // const show = false;
      return (
        <div className="search">
          <div className="page-header">
            <h4 className="text-left">Search Bookings</h4>
          </div>
        <div className="row">
          <CustomerName onSearch = {this.handleSearch.bind(this)} result={this.props.bookings} />
          {/* <CustomerId /> */}

      </div>   
        <div className="table">
          {this.state.show && <Table data={fakeBookings}  />}

        </div>  
      </div>
    );
    
  } 
} 
export default Search;
