import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
import * as FakeBookings from "../data/fakeBookings.json";
// import ResultsAll from "../components/Results.js";
export default class Bookings extends Component {
    constructor(props) {
       console.log(props)
        super(props);
        this.state ={ 
            reservations: props.reservations,
            customerId: null,
            customerName: null,
            isSortedASC : false,
            isSortedDES : false,
            numberOfResults: props.reservations.length
        }
    }
    searchByCustomerId = (e) => {
      //bookings will hold the initial data so that the search is always on the entire data
      const bookings = this.props.reservations
        .filter(booking => (
          booking.id === Number(this.state.customerId)
        ))
      this.setState({ 
        reservations : bookings,
        numberOfResults:bookings.length
      });             
    }
    searchByCustomerFirstName = (e) => {
      const bookings = this.props.reservations
        .filter(booking => (
            booking.firstname.toString().toLowerCase() === this.state.customerName.toLowerCase()
          ))
      this.setState({ 
        reservations : bookings,
        numberOfResults:bookings.length
      });
    }
    handleUpdateCustomerName = (e)=>{
      this.setState({customerName:e.target.value})
    }
    handleUpdateCustomerId = (e)=>{
      this.setState({customerId:e.target.value})
    }
    //to sort the booking result in ascending order
    sortASC = (sortBy) =>{
      this.setState(
        {
          isSortedASC:true,
          isSortedDES:false
      });
      return  this.state.reservations.sort(function (a, b) {
        if(sortBy === 'roomId' || sortBy === 'totalDays'){
          return a[sortBy] - b[sortBy];
        }
        else{
            if (a[sortBy] < b[sortBy]) {
                  return -1;
              }
              if (a[sortBy] > b[sortBy]) {
                  return 1;
              }            
              return 0;
        }
        });  
    }
    //to sort the bookings result in descending order
    sortDES = (sortBy) =>{
      this.setState(
        {
          isSortedDES:true,
          isSortedASC:false
        });
      return  this.state.reservations.sort(function (a, b) {
        if(sortBy === 'roomId' || sortBy === 'totalDays'){
          return b[sortBy] - a[sortBy];
        }else{
          if (b[sortBy] < a[sortBy]) {
            return -1;
          }
          if (b[sortBy] > a[sortBy]) {
            return 1;
          }            
        return 0;
        }
      });    
    }
    headerclick = (e) =>{
        const sortBy = e.target.id;
        /*
          on initial click sort the results in ascending alphabetically or form small number to larger number 
          order, if it is not alrady,
        */
        this.setState(this.sortASC(sortBy)); 
        //if the result is already sorted ascendingly, sort it in descending order alphabetically or 
        //from max to min if the column clicked is roomid or totalDays  
        if(this.state.isSortedASC){
          this.setState(this.sortDES(sortBy));  
        }
    }
    render() { 
        return ( 
            <div className = "App-content" >
            <div className = "container" >
            <Search 
                searchByCustomerId = {this.searchByCustomerId} 
                searchByCustomerFirstName = {this.searchByCustomerFirstName} 
                onCustomerNameChange={this.handleUpdateCustomerName} 
                onCustomerIdChange = {this.handleUpdateCustomerId}
            /> 
             <Results 
                reservations = {this.state.reservations} 
                headerclick = {this.headerclick} 
                numberOfResults = {this.state.numberOfResults} 
                updateRowsSelected = {this.updateNumberOfRowsSelected}
              /> 
             </div> 
             </div>
        );
    }
}
