import React, { useState } from 'react'
import SearchDetails from './SearchDetails'
import Profile from './Profile'

const SearchResults = (props) => {
  const [profileID, setProfileID] = useState(5)
  const [colSort, setColSort] = useState('id')
  const [sortAscending, setSortAscending] = useState(true)

  function handleClickProfile(clickedId) {
    setProfileID(clickedId)
  }

  const columnSort = (col) => {
    setColSort(col)
    setSortAscending(!sortAscending)
  }

  const sortedBookings = props.list.sort((a, z) => {
    let col = { colSort }.colSort
    console.log(col)
    return sortAscending ? (a[col] > z[col] ? 1 : -1) : z[col] > a[col] ? 1 : -1
  })
  console.log(sortedBookings)
  return (
    <div className="table-container">
      <table className="table table-sm">
        <thead className="table-header">
          <tr>
            <th
              className={colSort === 'id' && 'sorted'}
              onClick={() => columnSort('id')}
            >
              ID
            </th>
            <th
              className={colSort === 'title' && 'sorted'}
              onClick={() => columnSort('title')}
            >
              Title
            </th>
            <th
              className={colSort === 'firstName' && 'sorted'}
              onClick={() => columnSort('firstName')}
            >
              First Name
            </th>
            <th
              className={colSort === 'surname' && 'sorted'}
              onClick={() => columnSort('surname')}
            >
              Surname
            </th>
            <th
              className={colSort === 'email' && 'sorted'}
              onClick={() => columnSort('email')}
            >
              Email
            </th>
            <th
              className={colSort === 'roomId' && 'sorted'}
              onClick={() => columnSort('roomId')}
            >
              Room ID
            </th>
            <th
              className={colSort === 'checkInDate' && 'sorted'}
              onClick={() => columnSort('checkInDate')}
            >
              CheckIn Date
            </th>
            <th
              className={colSort === 'checkOutDate' && 'sorted'}
              onClick={() => columnSort('checkOutDate')}
            >
              CheckOut Date
            </th>
            <th>Number of Nights</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {sortedBookings.map((obj, index) => {
            return (
              <SearchDetails
                key={index}
                bookings={obj}
                handleClick={handleClickProfile}
              />
            )
          })}
        </tbody>
      </table>
      {profileID && <Profile id={profileID} />}
    </div>
  )
}

export default SearchResults
