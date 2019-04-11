// Create a `<SearchResults />` component that shows hotel bookings in a `<table>`
// element. Each booking will have an id, title, first name, surname, email, room id,
// check in date and check out date. You can make up data to show in the table.
// Then show `<SearchResults />` component within the `<Bookings />` component that is provided for you. Be sure to split out your components into small well-named components, similar to the method used in exercise 1. Hint: You will find some useful `<table>` examples in the [Bootstrap documentation for tables](https://getbootstrap.com/docs/4.2/content/tables/#examples)

import React from 'react'
var moment = require('moment')

const SearchResults = props => {
  return (
    <table class='table'>
      <thead class='thead-dark'>
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
          return (
            <tr>
              <td>{row.id}</td>
              <td>{row.title}</td>
              <td>{row.firstName}</td>
              <td>{row.surname}</td>
              <td>{row.email}</td>
              <td>{row.roomId}</td>
              <td>{row.checkInDate}</td>
              <td>{row.checkOutDate}</td>
              <td>
                {moment(row.checkOutDate).diff(moment(row.checkInDate), 'days')}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
export default SearchResults
