import React from 'react'

function SingleBooking(props) {

  return (
<>
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.firstName}</td>
      <td>{props.surname}</td>
      <td>{props.email}</td>
      <td>{props.roomId}</td>
      <td>{props.checkInDate}</td>
      <td>{props.checkOutDate}</td>
      <td>{props.nights}</td>
    </tr>
</>
  )
}

export default SingleBooking