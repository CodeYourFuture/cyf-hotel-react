import React from 'react'
import moment from "moment"

export default function SearchResults(props) {
    const result = props.results.map(r => (
      <tr>
        <th scope="row" key={r.id}>
          {r.id}
        </th>
        <td>{`${r.title} ${r.firstName} ${r.surname}`}</td>
        <td>{r.email}</td>
        <td>{`room: ${r.roomId}`}</td>
        <td>{r.checkInDate}</td>
        <td>{r.checkOutDate}</td>
            <td>{`${moment(r.checkOutDate).diff(moment(r.checkInDate), "days")} days`}</td>
      </tr>
    ));
  return (
      <table class="table table-dark">
          <tbody>
{result}
          </tbody>
      </table>
  )
}
