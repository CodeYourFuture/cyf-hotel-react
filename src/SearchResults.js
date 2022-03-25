import React from "react";
import moment from "moment";

const CalculateNumberOfNights = (inDate, outDate) => {
  let a = moment(inDate);
  let b = moment(outDate);
  return b.diff(a, "days");
};

/*
{
    "id": 3,
    "title": "Prince",
    "firstName": "Henry",
    "surname": "Wales",
    "email": "harry@wales.com",
    "roomId": 5,
    "checkInDate": "2018-03-01",
    "checkOutDate": "2018-04-09"
  },
*/

function SearchResults(props) {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Room</th>
            <th scope="col">Check In</th>
            <th scope="col">Check Out</th>
            <th scope="col">Total Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(e => (
            <tr>
              <th scope="row">{e.id}</th>
              <td>{e.firstName}</td>
              <td>{e.surname}</td>
              <td>{e.email}</td>
              <td>{e.roomId}</td>
              <td>{e.checkInDate}</td>
              <td>{e.checkOutDate}</td>
              <td>{CalculateNumberOfNights(e.checkInDate, e.checkOutDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
