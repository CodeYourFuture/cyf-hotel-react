import React, { Component } from 'react'
import moment from 'moment'

const ResultCount = props => (
  <div>
    <span>Results ({props.results.length} found)</span>
  </div>
)

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
      <th>Days staying</th>
    </tr>
  </thead>
)

export default class Results extends Component {
  render() {
    return (
      <div>
        <ResultCount results={this.props.results} />
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
                  <td>{moment(result.checkOutDate).diff(moment(result.checkInDate), 'days')}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
