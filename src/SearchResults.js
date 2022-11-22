import React from "react";
import moment from "moment";
import Highlighter from "./Highlighter";

const SearchResults = ({ results }) => {
  return (
    <div className="table-responsive-lg">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Title</th>
            <th scope="col">Forename</th>
            <th scope="col">Surname</th>
            <th scope="col">No of nights</th>
            <th scope="col">Check in</th>
            <th scope="col">Check out</th>
            <th scope="col">Room number</th>
          </tr>
        </thead>
        <tbody>
          {results.map(booking => {
            return (
              <tr>
                <td>{booking.email}</td>
                <td>{booking.title}</td>
                <td>{booking.firstName}</td>
                <td>{booking.surname}</td>
                <td>
                  {moment(booking.checkOutDate).diff(
                    booking.checkInDate,
                    "days"
                  )}
                </td>
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
                <td>{booking.roomId}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
