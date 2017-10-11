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
            customerName: null,
            isSortedASC : false,
            isSortedDES : false,
            numberOfResults: FakeBookings.length
        }
    }
    
    searchById = (e) => {
        const bookings = FakeBookings.filter(booking => booking.id === Number(this.state.customerId))
        this.setState(
          { bookings,
            numberOfResults:bookings.length
           }
           );
                       
    }
    searchByName = (e) => {
      const bookings = FakeBookings.filter(booking => booking.firstName.toString().toLowerCase() === this.state.customerName.toLowerCase())
      this.setState(
        { bookings,
          numberOfResults:bookings.length
         }
         );
    }
    updateCustomerName = (e)=>{
      this.setState({customerName:e.target.value})
    }
    updateCustomerId = (e)=>{
      this.setState({customerId:e.target.value})
    }
    //to sort the booking result in ascending order
    sortASC = (sortBy) =>{
      this.setState(
        {
          isSortedASC:true,
          isSortedDES:false
      });
      return  this.state.bookings.sort(function (a, b) {
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
      return  this.state.bookings.sort(function (a, b) {
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
    updateNumberOfRowsSelected = (n)=>{
      this.setState({numberOfResults : n })
    }
    render() { 
        return ( 
            <div className = "App-content" >
            <div className = "container" >
            <Search 
                searchById={this.searchById} 
                searchByName ={this.searchByName} 
                onCustomerNameChange={this.updateCustomerName} 
                onCustomerIdChange = {this.updateCustomerId}
            /> 
             <Results results = {this.state.bookings} headerclick = {this.headerclick} numberOfResults = {this.state.numberOfResults} updateRowsSelected = {this.updateNumberOfRowsSelected}/> { /* <Results results={this.state.results} /> */ }
             </div> 
             </div>
        );
    }
}
