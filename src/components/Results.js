import React, { Component } from 'react'
import moment from 'moment'

const ResultCount = props => (
  <div>
    <span>Results ({props.results.length} found)</span>
  </div>
)

const TableHead = props => (
  <thead>
    <tr>
      <th onClick={() => props.onSort('title')}>Title</th>
      <th onClick={() => props.onSort('firstName')}>First name</th>
      <th onClick={() => props.onSort('surname')}>Surname</th>
      <th onClick={() => props.onSort('email')}>Email</th>
      <th onClick={() => props.onSort('roomId')}>Room id</th>
      <th>Check in date</th>
      <th>Check out date</th>
      <th>Days staying</th>
    </tr>
  </thead>
)

export default class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'desc',
      firstName: 'desc',
      surname: 'desc',
      email: 'desc',
      roomId: 'desc',
      results: props.results
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ results: nextProps.results })
  }

  handleSort = (sortField) => {
    let direction = this.state[sortField] === 'desc' ? 'asc' : 'desc' //  Toggle direction
    let directionIsDesc = direction === 'desc'

    let sorted = this.state.results.sort((resultA, resultB) => {
      let a = resultA[sortField]
      let b = resultB[sortField]

      if (a < b) {
        return directionIsDesc ? -1 : 1
      } else if (a > b) {
        return directionIsDesc ? 1 : -1
      } else {
        return 0
      }
    })

    this.setState({
      results: sorted,
      [sortField]: direction
    })
  }

  render() {
    return (
      <div>
        <ResultCount results={this.props.results} />
        <table className="table">
          <TableHead onSort={this.handleSort} />
          <tbody>
            {this.state.results.map((result) => {
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
