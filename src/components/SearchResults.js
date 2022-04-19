import React, { useState, useEffect } from 'react'
import SearchDetails from './SearchDetails'
import Profile from './Profile'

const SearchResults = (props) => {
  const [profileID, setProfileID] = useState(5)
  const [colSort, setColSort] = useState('id');
  const [sortAscending, setSortAscending] = useState(true)

  function handleClickProfile(clickedId) {
    setProfileID(clickedId)
  }

  const columnSort = (col) => {
    setColSort(col)
    setSortAscending(!sortAscending)
  }

  //  useEffect(() => {
  //    setNewCustomers(newCustomers);
  //  }, [sortAscending]);
  const sortedBookings = props.list.sort((a, z) => {
    return sortAscending 
    ? a[`${colSort}`] - z[`${colSort}`] 
    : z[`${colSort}`] - a[`${colSort}`]
  })
  console.log(sortedBookings)
  return (
    <div className="table-container">
      <table className="table table-sm">
        <thead className="table-header">
          <tr>
            <th onClick={() => columnSort('id')}>ID</th>
            <th onClick={() => columnSort('title')}>Title</th>
            <th onClick={() => columnSort('firstName')}>First Name</th>
            <th onClick={() => columnSort('surname')}>Surname</th>
            <th onClick={() => columnSort('email')}>Email</th>
            <th onClick={() => columnSort('roomId')}>Room ID</th>
            <th onClick={() => columnSort('checkInDate')}>CheckIn Date</th>
            <th onClick={() => columnSort('checkOutDate')}>CheckOut Date</th>
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
