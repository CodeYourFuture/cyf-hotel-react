import React, { Component } from 'react'

const TableHead = () => (
  <thead>
    <tr>
      <th>Title</th>
      <th>First name</th>
      <th>Surname</th>
      <th>Email</th>
      <th>Room id</th>
      <th>Check in date</th>
      <th>Check out date</th>
    </tr>
  </thead>
)

export default class Results extends Component {
  render() {
    return (
      <div>
        <div>
          <span>Results ({this.props.results.length} found)</span>
        </div>
        <table className="table">
          <TableHead />
          <tbody>
            {this.props.results.map((result) => {
              return (
                <tr key={`result-row-${result.email}`}>
                  <td>{result.title}</td>
                  <td>{result.firstName}</td>
                  <td>{result.surname}</td>
                  <td>{result.email}</td>
                  <td>{result.roomId}</td>
                  <td>{result.checkInDate}</td>
                  <td>{result.checkOutDate}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
