import React from "react";
import moment from "moment";

const getDaysDifference = (date1, date2) => {
let a = moment(date1);
let b = moment(date2);
    return a.diff(b, 'days')
    
}

const SearchResults = (props) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>first name</th>
          <th>surname</th>
          <th>email</th>
          <th>room id</th>
          <th>check in date</th>
          <th>check out date</th>
          <th>number of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((booking) => {
          return (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>{getDaysDifference(booking.checkOutDate,booking.checkInDate)}</td>
              </tr>
        )})}
        
      </tbody>
    </table>
  );
};
export default SearchResults;
