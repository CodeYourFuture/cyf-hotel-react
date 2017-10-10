import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
import * as FakeBookings from "../data/fakeBookings.json";
// import ResultsAll from "../components/Results.js";
export default class Bookings extends Component {
    constructor(props) {
        super(props);
        this.state ={ 
            bookings: FakeBookings,
            customerId: null,
            customerName: null
        }
    }
    searchById = (e) => {
        const bookings = FakeBookings.filter(booking => booking.id === Number(this.state.customerId))
        this.setState({bookings});
    }
    searchByName = (e) => {
      const bookings = FakeBookings.filter(booking => booking.firstName.toString() === this.state.customerName)
      this.setState({bookings})
    }
    updateCustomerName = (e)=>{
      this.setState({customerName:e.target.value})
    //   console.log(e.target.value)

    }
    updateCustomerId = (e)=>{
      this.setState({customerId:e.target.value})
    }
    render() { 
        return ( <div className = "App-content" >
            <div className = "container" >
            <Search 
                searchById={this.searchById} 
                searchByName ={this.searchByName} 
                onCustomerNameChange={this.updateCustomerName} 
                onCustomerIdChange = {this.updateCustomerId}
            /> 
             <Results results = {this.state.bookings}/> { /* <Results results={this.state.results} /> */ }
             </div> 
             </div>
        );
    }
}
