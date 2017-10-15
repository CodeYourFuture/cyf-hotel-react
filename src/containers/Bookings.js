import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";

const FAKE_API_URL = 'https://gist.githubusercontent.com/40thieves/e18665f42b9a7f32003a86f060b92fb2/raw/41f6f221067803447fa5daa78dd450455e47f57d/fake-api.json'

export default class Bookings extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allResults: null,
      filteredResults: null
    }
  }

  componentDidMount() {
    fetch(FAKE_API_URL)
      .then((data) => {
        if (data.ok) {
          return data.json()
        }
      })
      .then((results) => {
        this.setState({
          allResults: results,
          filteredResults: this.filterResults(results)
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
    return (
      <div className="App-content">
        <div className="container">
          <Search onSearch={this.handleSearch} />
          {this.state.filteredResults && <Results results={this.state.filteredResults} />}
        </div>
      </div>
    );
  }
}