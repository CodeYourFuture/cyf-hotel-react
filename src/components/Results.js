import React, { Component } from 'react'
import moment from 'moment'

const ResultCount = props => (
  <div>
    <span>Results ({props.results.length} found, {props.selected.length} selected)</span>
  </div>
)

const TableHead = props => (
  <thead>
    <tr>
      <th>Select</th>
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

const ResultRow = props => (
  <tr className={props.selected ? 'table-primary' : ''}>
    <td>
      <input
        type="checkbox"
        onChange={() => props.onSelected(props.email)}
      />
    </td>
    <td>{props.title}</td>
    <td>{props.firstName}</td>
    <td>{props.surname}</td>
    <td>{props.email}</td>
    <td>{props.roomId}</td>
    <td>{props.checkInDate}</td>
    <td>{props.checkOutDate}</td>
    <td>{moment(props.checkOutDate).diff(moment(props.checkInDate), 'days')}</td>
  </tr>
)

export default class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: [],
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

  handleSelected = (selectedEmail) => {
    let found = this.state.selected.find((s) => s === selectedEmail)
    let newSelected
    if (found) {
      newSelected = this.state.selected.filter((s) => s !== selectedEmail)
    } else {
      newSelected = this.state.selected.concat(selectedEmail)
    }
    this.setState({ selected: newSelected })
  }

  render() {
    return (
      <div>
        <ResultCount results={this.props.results} selected={this.state.selected} />
        <table className="table">
          <TableHead onSort={this.handleSort} />
          <tbody>
            {this.state.results.map((result) => (
              <ResultRow
                key={`result-row-${result.email}`}
                onSelected={this.handleSelected}
                selected={this.state.selected.includes(result.email)}
                {...result}
              />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
