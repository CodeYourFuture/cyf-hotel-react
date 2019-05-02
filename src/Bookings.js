import React, { Component } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults/SearchResults";
import FakeBookings from "./data/fakeBookings.json";

export default class Bookings extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      results : null
    }
  }

  componentDidMount(){
    fetch("https://cyf-react.glitch.me/error").then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res
      } else {
        throw new Error('HTTP error')
      }
    }).then(res => res.json())
    .then(data => {
      this.setState({
        isLoading: false,
        results : data,
      })
    }).catch((err) => {
      this.setState({
        isLoading: false,
        error: err
      })
    })
  }


  search = searchVal => {
    const checkdetails = (customer) =>{
      return(customer.firstName === searchVal || customer.surname === searchVal || customer.id ==searchVal)
    }
    const searchResult = FakeBookings.filter(checkdetails)
    this.setState({results:searchResult})
    console.info("TO DO!", searchResult);
   
  };

  render() {
    if (this.state.isLoading) {
      return <span>Loading... </span>
    } else if (this.state.error) {
      return <span>Something went wrong 😭</span>
    }else {
      return (
        <div className="App-content">
          <div className="container">
            <Search search={this.search} />
            {/* <SearchResults /> */}
            <SearchResults results={this.state.results} />
          </div>
        </div>
      );
    }
  }
}
