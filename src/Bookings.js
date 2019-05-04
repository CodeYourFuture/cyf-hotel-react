import React, { Component } from 'react'
import Search from './Search.js'
import SearchResults from './SearchResults.js'
import NewBooking from './NewBooking.js'

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
      }),
    1000
  }
  search = searchVal => {
    if (searchVal !== '' || searchVal !== null) {
      console.info('TO DO!', searchVal)
      const searchResults = this.state.FakeBookings.filter(bookings => {
        return (
          bookings.firstName === searchVal || bookings.surname === searchVal
        )
      })
      console.log(searchResults)
      this.setState({
        FakeBookings: searchResults
      })
    } else {
      this.setState({
        FakeBookings: this.state.FakeBookings
      })
    }
  }
  addBooking = newBooking => {
    this.setState({
      FakeBookings: this.state.FakeBookings.concat(newBooking)
    })
  }
  render () {
    if (this.state.isLoading) {
      return <span>Loading.....🏨</span>
    } else if (this.state.error) {
      return <span>Something went wrong 😭</span>
    } else {
      return (
        <div className='App-content'>
          <div>
            <Search search={this.search} />
            <SearchResults results={this.state.FakeBookings} />
            <NewBooking
              id={this.state.FakeBookings.length}
              handleBooking={this.addBooking}
            />
          </div>
        </div>
      )
    }
  }
}
