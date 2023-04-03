import moment from 'moment'
import { useState, useEffect } from 'react'
import { SearchButton } from './SearchButton'
import { CustomerProfile } from './CustomerProfile'

export const SearchResults = ({ data }) => {
  const [highlightedRow, setHighlightedRow] = useState(null)
  const [isShown, setisShown] = useState(false)
  const [customerId, setCustomerId] = useState(0)
  const [customerProfile, setCustomerProfile] = useState(null)

  const handleProfileClick = (e) => {
    setisShown(!isShown)
    setCustomerId(e.id)
  }

  useEffect(() => {
    fetch('https://react-hotel-1.glitch.me/customerProfiles')
      .then((res) => res.json())
      .then((data) => setCustomerProfile(data))
  }, [])

  return (
    <div className="tableProfileContainer">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room ID</th>
            <th>Check-In Date</th>
            <th>Check-Out Date</th>
            <th>No. of Nights</th>
            <th>Customer Profile</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, index) => (
            <tr
              className={highlightedRow === index ? 'row-highlighted' : null}
              onClick={() => setHighlightedRow(index)}
            >
              <td key={e.id}>{e.id}</td>
              <td key={e.title}>{e.title}</td>
              <td key={e.firstNam}>{e.firstName}</td>
              <td key={e.surnam}>{e.surname}</td>
              <td key={e.email}>{e.email}</td>
              <td key={e.roomId}>{e.roomId}</td>
              <td key={e.checkInDate}>{e.checkInDate}</td>
              <td key={e.checkOutDate}>{e.checkOutDate}</td>
              <td key={index}>
                {moment(e.checkOutDate).diff(moment(e.checkInDate), 'days')}
              </td>
              <SearchButton
                onClick={handleProfileClick}
                className={'btn btn-primary'}
              >
                Show profile
              </SearchButton>
            </tr>
          ))}
        </tbody>
      </table>
      {isShown && <CustomerProfile data={customerProfile} />}
    </div>
  )
}
