import React from "react";
import moment from "moment";
moment().format();

function SearchResults(props) {
  const table = (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Number of Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => {
          let arrivalDate = moment(result.checkInDate, "YYYY-MM-DD");
          let departureDate = moment(result.checkOutDate, "YYYY-MM-DD");
          let numberOfNights = departureDate.diff(arrivalDate, "days");
          return (
            <tr key={result.id}>
              <th scope="row">{result.id}</th>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomid}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>{numberOfNights}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
  return table;
}

export default SearchResults;
