import React from "react";
import moment from "moment";

function SearchResults({ results }) {
  const day1 = new moment("2021-05-21");
  const day2 = new moment("2021-05-27");
  console.log(moment.duration(day2.diff(day1)).as("days"));

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Nights booked</th>
        </tr>
      </thead>
      <tbody>
        {results.map((entry, index) => (
          <tr key={index}>
            <th scope="row">{entry.id}</th>
            <td>{entry.title}</td>
            <td>{entry.firstName}</td>
            <td>{entry.surname}</td>
            <td>{entry.email}</td>
            <td>{entry.roomId}</td>
            <td>{entry.checkInDate}</td>
            <td>{entry.checkOutDate}</td>
            <td>
              {moment
                .duration(
                  new moment(entry.checkOutDate).diff(
                    new moment(entry.checkInDate)
                  )
                )
                .as("days")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default SearchResults;
