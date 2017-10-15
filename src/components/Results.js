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

class ResultRow extends Component {
  constructor(props) {
    super(props)
    this.state = { selected: false }
  }

  handleCheck = () => {
    let selected = !this.state.selected
    this.setState({ selected })
    this.props.onSelected(this.props.email)
  }

  render() {
    return (
      <tr className={this.state.selected ? 'table-primary' : ''}>
        <td><input type="checkbox" checked={this.state.checked} onChange={this.handleCheck} /></td>
        <td>{this.props.title}</td>
        <td>{this.props.firstName}</td>
        <td>{this.props.surname}</td>
        <td>{this.props.email}</td>
        <td>{this.props.roomId}</td>
        <td>{this.props.checkInDate}</td>
        <td>{this.props.checkOutDate}</td>
        <td>{moment(this.props.checkOutDate).diff(moment(this.props.checkInDate), 'days')}</td>
      </tr>
    )
  }
}

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
                {...result}
              />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
