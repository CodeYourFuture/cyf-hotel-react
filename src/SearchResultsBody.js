import React from 'react'
import TableRows from './TableRows'

function SearchResultsBody({bookings, setCustomerId}) {
  const tableRows = bookings.map((booking) => <TableRows booking={booking} key={booking.id} setCustomerId={setCustomerId}/>)
  return (
    <tbody>{tableRows}</tbody>
  )
}

export default SearchResultsBody
