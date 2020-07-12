import React from "react";
import moment from "moment";
function SearchResults(props) {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check-In Date</th>
          <th scope="col">Check-Out Date</th>
          <th scope="col">No. Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((item, index) => {
          const nightsSpent = moment(item.checkOutDate).diff(
            item.checkInDate,
            "days"
          );
          return (
            <tr key={index}>
              <td scope="row">{item.id}</td>
              <td>{item.title}</td>
              <td>{item.firstName}</td>
              <td>{item.surname}</td>
              <td>{item.email}</td>
              <td>{item.roomId}</td>
              <td>{item.checkInDate}</td>
              <td>{item.checkOutDate}</td>
              <td>{nightsSpent}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;
