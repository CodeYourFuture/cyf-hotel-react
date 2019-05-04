import React, { Component } from 'react'
import Search from './Search.js'
import SearchResults from './SearchResults.js'
// import FakeBookings from './data/fakeBookings.json'

export default class Bookings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      FakeBookings: [],
      error: null,
      isLoading: true
    }
  }
  componentDidMount () {
    console.log('inside component mount')
    fetch('https://cyf-react.glitch.me/')
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res
        } else {
          throw new Error('HTTP error')
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          isLoading: false,
          FakeBookings: data
        })
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          error: error
        })
      })
  }
  search = searchVal => {
    console.info('TO DO!', searchVal)
    const searchResults = this.state.FakeBookings.filter(bookings => {
      return bookings.firstName === searchVal || bookings.surname === searchVal
    })
    console.log(searchResults)
    this.setState({
      FakeBookings: searchResults
    })
  }

  render () {
    // console.log(this.state.FakeBookings)
    return (
      <div className='App-content'>
        <div>
          <Search search={this.search} />
          <SearchResults results={this.state.FakeBookings} />
        </div>
      </div>
    )
  }
}
