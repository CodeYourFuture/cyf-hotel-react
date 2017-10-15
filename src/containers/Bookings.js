import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
import * as api from '../data/api'

export default class Bookings extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      allResults: null,
      filteredResults: null,
      error: null
    }
  }

  componentDidMount() {
    api.slow()
      .then((results) => {
        this.setState({
          loading: false,
          allResults: results,
          filteredResults: this.filterResults(results)
        })
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error
        })
      })
  }

  filterResults = (results, query, searchType) => {
    return results.filter((result) => {
      if (searchType === 'roomId') {
        return result.roomId === parseInt(query, 10)
      } else if (searchType === 'customerName') {
        return result.firstName.toLowerCase().includes(query.toLowerCase())
      } else {
        return false
      }
    })
  }

  handleSearch = (query, searchType) => {
    this.setState({
      filteredResults: this.filterResults(this.state.allResults, query, searchType)
    })
  }

  render() {
    let content
    if (this.state.loading) {
      content = <div className="alert alert-primary">Loading&hellip;</div>
    } else if (this.state.error) {
      content = <div className="alert alert-danger">Error: {this.state.error.message}</div>
    } else {
      content = this.state.filteredResults 
        ? <Results results={this.state.filteredResults} />
        : <div className="alert alert-info">No results</div>
    }

    return (
      <div className="App-content">
        <div className="container">
          <Search onSearch={this.handleSearch} />
          {content}
        </div>
      </div>
    );
  }
}