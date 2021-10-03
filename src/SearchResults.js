import React from "react";
import ResultsTableHeading from "./ResultsTableHeading";

// Renders complete bookings result table, called by `Bookings.js`
const SearchResults = props => {
  return (
    <table class="table">
      <ResultsTableHeading />

      <tbody>
        {props.results.map((guest, index) => (
          <tr className="text-center" key={index}>
            <td>{guest.id}</td>
            <td>{guest.title}</td>
            <td>{guest.firstName}</td>
            <td>{guest.surname}</td>
            <td>{guest.email}</td>
            <td>{guest.roomId}</td>
            <td>{guest.checkInDate}</td>
            <td>{guest.checkOutDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
