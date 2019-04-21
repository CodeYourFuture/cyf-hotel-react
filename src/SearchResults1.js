// Create a `<SearchResults />` component that shows hotel bookings in a `<table>`
// element. Each booking will have an id, title, first name, surname, email, room id,
// check in date and check out date. You can make up data to show in the table.
// Then show `<SearchResults />` component within the `<Bookings />` component that is provided for you. Be sure to split out your components into small well-named components, similar to the method used in exercise 1. Hint: You will find some useful `<table>` examples in the [Bootstrap documentation for tables](https://getbootstrap.com/docs/4.2/content/tables/#examples)

import React, { Component } from 'react'
var moment = require('moment')
class SearchResults extends Component {
  state = {
    rowSelected: false,
    previousRow: '',
    currentRow: ''
  }
  handleSelection = () => {
    this.setState(previousState => {
      return {
        rowSelected: !previousState.rowSelected
      }
    })
  }

  toggle = e => {
    let x = null
    this.handleSelection()

    console.log(this.state.rowSelected + ' after set ')

    if (this.state.rowSelected) {
      // e.target.parentNode.style.background = 'lightblue'
      // this.state.previousRow = e.target.parentNode
      this.setState({ previousRow: e.target.parentNode })
    } else {
      // turn current row white and row Selected to false
      // e.target.parentNode.style.background = 'white'
      if (this.state.previousRow !== '') {
        x = this.state.previousRow
        // x.style.background = 'white'

        // previous row is not equal to selected row
        if (this.state.previousRow !== e.target.parentNode) {
          // this.state.rowSelected = true
          this.handleSelection()
          // e.target.parentNode.style.background = 'lightblue'
          // x.style.background = 'white'
          // this.state.previousRow = e.target.parentNode
          this.setState({ previousRow: e.target.parentNode })
        }
      }
    }
  }

  render () {
    // console.log('selected ' + this.state.rowSelected)

    return (
      <table className='table'>
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
          {this.props.results.map(row => {
            return (
              <tr onClick={this.toggle}>
                <td>{row.id}</td>
                <td>{row.title}</td>
                <td>{row.firstName}</td>
                <td>{row.surname}</td>
                <td>{row.email}</td>
                <td>{row.roomId}</td>
                <td>{row.checkInDate}</td>
                <td>{row.checkOutDate}</td>
                <td>
                  {moment(row.checkOutDate).diff(
                    moment(row.checkInDate),
                    'days'
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default SearchResults
