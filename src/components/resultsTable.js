import React from 'react';
import FakeBookings from "../data/fakeBookings.json";
const ResultsTable = (props) => {
  return(
    <div >
      <table>
      <tr>
          <th>Title</th>
          <th>First Name</th>
          <th>surname</th>
          <th>email</th>
          <th>roomId</th>
          <th>checkInDate</th>
          <th>checkOutDate</th>
        </tr>
      {FakeBookings.map((item, index) => (
        <tr>
          <td>{item.title}</td>
          <td>{item.firstName} </td>
          <td>{item.surname} </td>
          <td>{item.email} </td>
          <td>{item.roomId} </td>
          <td>{item.checkInDate} </td>
          <td>{item.checkOutDate} </td>
      </tr>
      ))}
    </table>
    </div>
  )
}
export default ResultsTable ;
