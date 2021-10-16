import React from "react";
import BookingTable from "./BookingTable";

function SearchResults(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Titlee</th>
            <th scope="col">first Name</th>
            <th scope="col">Surname</th>
            <th scope="col">email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((booking, index) => (
            <BookingTable key={index} result={booking} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default SearchResults;
