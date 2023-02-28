import React from 'react'

function SearchResults(props) {

  return (
<>
      
  <table class="table">
  
  <tbody>
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.firstName}</td>
      <td>{props.surname}</td>
      <td>{props.email}</td>
      <td>{props.roomId}</td>
      <td>{props.checkInDate}</td>
      <td>{props.checkOutDate}</td>
    </tr>
  </tbody>
</table>
</>
  )
}

export default SearchResults