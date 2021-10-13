import React, { useState } from "react";
import ResultsTableHeading from "./ResultsTableHeading";
import GetBookingLength from "./GetBookingLength";
import "./SearchResults.css";
import CustomerProfile from "./CustomerProfile";

// Renders complete bookings result table, called by `Bookings.js`.
const SearchResults = props => {
  const [highlight, setHighlight] = useState([]);
  const [guestId, setGuestId] = useState("");

  // On a click event, toggles background colour via bootstrap class, filter used to prevent mutation of state.
  const handleRowClick = index => {
    !highlight.includes(index)
      ? setHighlight(indexes => indexes.concat(index))
      : setHighlight(indexes => indexes.filter(i => i !== index));
  };

  // On a click event, sets state variable `guestId` to either an empty string (default) or the id of the button clicked.
  const handleButtonClick = iD => {
    guestId === "" || guestId !== iD ? setGuestId(iD) : setGuestId("");
  };

  return (
    <>
      <table className="table Search-table table-responsive">
        <ResultsTableHeading />

        <tbody>
          {props.results.map((guest, index) => (
            <tr
              className={`text-center SearchResults-tr ${
                highlight.includes(index) ? "bg-success text-light" : " "
              }`}
              key={index}
              onClick={() => handleRowClick(index)}
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
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleButtonClick(guest.id)}
                >
                  Show profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CustomerProfile id={guestId} />
    </>
  );
};

export default SearchResults;
