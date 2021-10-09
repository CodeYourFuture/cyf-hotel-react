import React, { useState } from "react";
import ResultsTableHeading from "./ResultsTableHeading";
import GetBookingLength from "./GetBookingLength";
import "./SearchResults.css";

// Renders complete bookings result table, called by `Bookings.js`.
const SearchResults = props => {
  const [highlight, setHighlight] = useState([]);

  // Toggles table row when clicked, filter used to prevent mutation of state.
  const handleClick = index => {
    !highlight.includes(index)
      ? setHighlight(indexes => indexes.concat(index))
      : setHighlight(indexes => indexes.filter(i => i !== index));
  };

  return (
    <table className="table Search-table table-responsive">
      <ResultsTableHeading />

      <tbody>
        {props.results.map((guest, index) => (
          <tr
            className={`text-center SearchResults-tr ${
              highlight.includes(index) ? "bg-primary text-light" : " "
            }`}
            key={index}
            onClick={() => handleClick(index)}
          >
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
