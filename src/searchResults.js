import React, { useState } from "react";
import SearchResultRow from "./SearchResultRow";
import FakeBookings from "./data/fakeBookings.json";

function SearchResults() {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of nights</th>
          </tr>
        </thead>
        <tbody>
          {FakeBookings.map(detail => {
            return (
              <SearchResultRow
                id={detail.id}
                title={detail.firstName}
                surname={detail.surname}
                email={detail.email}
                roomId={detail.roomId}
                checkInDate={detail.checkInDate}
                checkOutDate={detail.checkOutDate}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default SearchResults;
