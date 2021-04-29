import moment from "moment";
import React from "react";
import SearchResultRow from "./SearchResultRow";

const SearchResults = ({ bookings }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map(booking => {
          const checkIn = moment(booking.checkInDate);
          const checkOut = moment(booking.checkOutDate);
          const nights = checkOut.diff(checkIn, "days");
          return <SearchResultRow booking={booking} nights={nights} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
