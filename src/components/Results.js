
import React from 'react';
import moment from './monent';

const Results = (props) => {
  return (
    <table className="table">
    <thead>
      <tr>

        <th>title</th>
        <th>firstname</th>
        <th>surname</th>
        <th>email</th>
        <th>roomId</th>
        <th>checkInDate</th>
        <th>checkOutDate</th>
        <td>Durations stayed in</td>
      </tr>
      </thead>
      <tbody>
      {props.results.map(result => {
        return (
          <tr>


            <td>{result.title}</td>
            <td>{result.firstName}</td>
            <td>{result.surname}</td>
            <td>{result.email}</td>
            <td>{result.roomId}</td>
            <td>{result.checkInDate}</td>
            <td>{result.checkOutDate}</td>
            <td>moment{[result.checkOutDate].diff([result.checkInDate], 'days') }</td>

          </tr>
        )
      })}
      </tbody>
    </table>

  )
}

export default Results;


// // Create a Results component that shows a table of results. 
// Show it on the Bookings page using hard coded data.
//  Hint: look in `src/containers/Bookings.js` for where to load it. 
//  Be sure to split out your components, similar to the method used in exercise 1








