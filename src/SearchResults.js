import React from "react";
import ResultsTableHeading from "./ResultsTableHeading";
import GetBookingLength from "./GetBookingLength";

// Renders complete bookings result table, called by `Bookings.js`.
const SearchResults = props => {
  return (
    <table className="table App-table table-responsive">
      <ResultsTableHeading />

      <tbody>
        {props.results.map((guest, index) => (
          <tr className="text-center App-tr" key={index}>
            <td>{guest.id}</td>
            <td>{guest.title}</td>
            <td>{guest.firstName}</td>
            <td>{guest.surname}</td>
            <td>{guest.email}</td>
            <td>{guest.roomId}</td>
            <td>{guest.checkInDate}</td>
            <td>{guest.checkOutDate}</td>
            <td>{<GetBookingLength guest={guest} />} Days</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
