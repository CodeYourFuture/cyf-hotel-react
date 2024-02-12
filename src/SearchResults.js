import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import BookingTable from "./BookingTable";


function SearchResults(props) {
  const [id, setId] = useState("");
  return (
    <div className="table-div">
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
            <th scope="col">nights</th>
            <th scope="col"> customer profile</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((booking, index) => (
            <BookingTable key={index} result={booking} setId={setId} />
          ))}
        </tbody>
      </table>
      {id ? <CustomerProfile id={id} setId={setId} /> : null}
    </div>
  );
}
export default SearchResults;
