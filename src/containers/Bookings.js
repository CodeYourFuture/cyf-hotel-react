import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";

import SortableHeaders from "../components/SortableHeaders.js";

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      err: false,
      showData: false,
      results: []
      // background: Null
      
    };

    this.toggleContent = this.toggleContent.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }
  searching = (text)=>{
   const  results = this.state.data.filter( (item)=> item.surname == text)
    this.setState({
      results: results
    })


  }
  toggleContent = (message) => {
    // this.state.background ? 
    this.setState({ showData: !this.state.showData });
    console.log(message)
  };
  componentDidMount() {
    fetch("http://localhost:4000/api/customers-and-reservations")
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          throw new Error("HTTP error");
        }
      })
      .then(res => res.json())
      .then(apiData => {
        this.setState({
          isLoading: false,
          data: apiData.invoices,
          results: apiData.invoices
        });
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          err: err
        });
      });
  }

  sortBy = (key, direction) => {
    console.log(direction);
    console.log(key);
    this.setState({
      data: this.state.data.sort((a, b) => {
        if (a[key] > b[key]) {
          return direction === "asc" ? 1 : -1;
        } else if (a[key] < b[key]) {
          return direction === "asc" ? -1 : 1;
        } else {
          return 0;
        }
      })
    });
  };
  search = () => {
    console.info("to do!");
  };

  render() {
    // if (this.state.isLoading) {
    //   return <div>Loading.... ... 🤔</div>;
    // }
    // if (this.state.err) {
    //   return <div>Something went wrong 😭</div>;
    // }

    return (
      <div className="App-content">
        <div className="container">
          <Search
            search={this.searchAction}
            setSearchName={this.setSearchName}
            setSearchId={this.setSearchId}
            toggleContent={this.toggleContent}
            searching = {this.searching}
          />

         {this.state.showData &&  <Results
          
          
            data={this.state.results}
            sortBy={this.sortBy}
            // data={this.state.data}
         /> }
          {this.state.isLoading && <div>Loading.... ... 🤔</div>}
          {this.state.err && <div>Something went wrong 😭</div>}
        </div>
      </div>
    );
  }
}
