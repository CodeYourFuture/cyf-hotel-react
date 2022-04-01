//creating a table
import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  const [row, setRow] = useState(0);

  function whenRowIsClicked() {
    setRow(!row);
  }

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
                <tr
                  //changing entire table, look at this again figure out how to chang just row
                  onClick={whenRowIsClicked}
                  style={{ backgroundColor: row ? "red" : "" }}
                >
                  <td>{booking.id}</td>
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
