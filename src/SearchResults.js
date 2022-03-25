//creating a table
import React from "react";
import moment from "moment";

const SearchResults = props => {
  return (
    <div>
      <table class="table table-bordered table-dark">
        <thead>
          <td scope="col">id</td>
          <td scope="col">title</td>
          <td scope="col">firstName</td>
          <td scope="col">surname</td>
          <td scope="col">email</td>
          <td scope="col">roomId</td>
          <td scope="col">checkInDate</td>
          <td scope="col">checkOutDate</td>
          <td scope="col">daysStay</td>
        </thead>
        <tbody>
          {props.results.map(booking => {
            let checkInDate = moment(booking.checkInDate);
            let checkOutDate = moment(booking.checkOutDate);
            let daysStay = checkOutDate.diff(checkInDate, "days");
            return (
              <>
                <tr>
                  <th scope="row">{booking.id}</th>
                  <td>{booking.title}</td>
                  <td>{booking.firstName}</td>
                  <td>{booking.surname}</td>
                  <td>{booking.email}</td>
                  <td>{booking.roomId}</td>
                  <td>{booking.checkInDate}</td>
                  <td>{booking.checkOutDate}</td>
                  <td>{(booking = daysStay)}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
