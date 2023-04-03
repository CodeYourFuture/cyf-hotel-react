import React, { useEffect, useState } from 'react'
import Search from './Search.js'
import { SearchResults } from './SearchResults.js'
import FakeBookings from './data/fakeBookings.json'

const Bookings = () => {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    fetch('https://react-hotel-1.glitch.me/fakeBookings')
      .then((res) => res.json())
      .then((data) => setBookings(data))
  }, [])

  const search = (searchVal) => {
    const filteredBookings = bookings.filter(
      (book) =>
        book.firstName.toLowerCase() === searchVal.toLowerCase() ||
        book.surname.toLowerCase() === searchVal.toLowerCase() ||
        book.title.toLowerCase() === searchVal.toLowerCase() ||
        book.email.toLowerCase() === searchVal.toLowerCase() ||
        book.roomId.toString() === searchVal ||
        book.checkInDate === searchVal ||
        book.checkOutDate === searchVal
    )
    setBookings(filteredBookings)
  }

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults data={bookings} />
      </div>
    </div>
  )
}

export default Bookings
