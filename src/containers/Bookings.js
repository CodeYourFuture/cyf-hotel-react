import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";

const FAKE_API_URL = 'https://gist.githubusercontent.com/40thieves/e18665f42b9a7f32003a86f060b92fb2/raw/41f6f221067803447fa5daa78dd450455e47f57d/fake-api.json'
const ERROR_API_URL = 'http://httpbin.org/status/500'

export default class Bookings extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allResults: null,
      filteredResults: null,
      error: null
    }
  }

  componentDidMount() {
    fetch(FAKE_API_URL)
      .then((data) => {
        if (data.ok) {
          return data.json()
        } else {
          throw new Error(data.statusText)
        }
      })
      .then((results) => {
        this.setState({
          allResults: results,
          filteredResults: this.filterResults(results)
        })
      })
      .catch((err) => {
        this.setState({ error: err })
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
    if (this.state.error) {
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