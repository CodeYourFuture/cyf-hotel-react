import React from "react";
import moment from "moment";
const SearchResults = ({ results }) => {
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
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map(booking => {
          return (
            <tr key={booking.id}>
              {Object.keys(booking).map(key => (
                <td key={booking[key]}>{booking[key]}</td>
              ))}
              <td key="totalNights">
                {moment(booking.checkOutDate).diff(
                  moment(booking.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default SearchResults;
