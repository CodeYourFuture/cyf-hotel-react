// Create a `<SearchResults />` component that shows hotel bookings in a `<table>`
// element. Each booking will have an id, title, first name, surname, email, room id,
// check in date and check out date. You can make up data to show in the table.
// Then show `<SearchResults />` component within the `<Bookings />` component that is provided for you. Be sure to split out your components into small well-named components, similar to the method used in exercise 1. Hint: You will find some useful `<table>` examples in the [Bootstrap documentation for tables](https://getbootstrap.com/docs/4.2/content/tables/#examples)

import React, { Component } from 'react'
var moment = require('moment')

function SearchResults (props) {
  return (
    <div className='container'>
      <table className='table table-responsive'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Title</th>
            <th scope='col'>First Name</th>
            <th scope='col'>Surname</th>
            <th scope='col'>Email</th>
            <th scope='col'>Room Id</th>
            <th scope='col'>Check-in Date</th>
            <th scope='col'>Check-out Date</th>
            <th scope='col'>Duration of Stay</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(row => {
            return <TableRow row={row} />
          })}
        </tbody>
      </table>
      <hr />
    </div>
  )
}

class TableRow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isSelected: false
    }
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
        isSelected: !previousState.isSelected
      }
    })
  }

  render () {
    const rowClassName = this.state.isSelected
      ? 'bg-secondary text-white'
      : 'bg-light'
    return (
      <tr className={rowClassName} onClick={this.handleClick}>
        <td>{this.props.row.id}</td>
        <td>{this.props.row.title}</td>
        <td>{this.props.row.firstName}</td>
        <td>{this.props.row.surname}</td>
        <td>{this.props.row.email}</td>
        <td>{this.props.row.roomId}</td>
        <td>{this.props.row.checkInDate}</td>
        <td>{this.props.row.checkOutDate}</td>
        <td>
          {moment(this.props.row.checkOutDate).diff(
            moment(this.props.row.checkInDate),
            'days'
          )}
        </td>
      </tr>
    )
  }
}

export default SearchResults
