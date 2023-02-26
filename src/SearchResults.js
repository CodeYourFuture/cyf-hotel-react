import React from "react";
import moment from "moment";


function SearchResults(props){

    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Total Num of Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.bookingResults.map((result) => (
            <tr key={result.id}>
              <th scope="row">{result.id}</th>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>{moment(result.checkOutDate).diff((result.checkInDate),"days")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}
export default SearchResults;