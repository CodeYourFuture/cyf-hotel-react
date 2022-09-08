import React, { useState } from "react";
import ResultsTableHeading from "./ResultsTableHeading";
import GetBookingLength from "./GetBookingLength";
import "./SearchResults.css";
import CustomerProfile from "./CustomerProfile";

// Renders complete bookings result table, called by `Bookings.js`.
const SearchResults = props => {
  const [highlight, setHighlight] = useState([]);
  const [guestId, setGuestId] = useState("");
  const [showCustomerProfile, setProfileButtonText] = useState(false);

  // On a click event, toggles background colour via bootstrap class.
  const handleRowClick = index => {
    !highlight.includes(index)
      ? setHighlight(indexes => indexes.concat(index)) // Add id if not in array
      : setHighlight(indexes => indexes.filter(i => i !== index)); // Else if in array, filter and remove id (toggle)
  };

  // On a click event, sets state variable `guestId` to either an empty string (default) or
  // the id of the button when clicked and removes the row highlighting from a row if a different iD
  // is passed as an argument. Also toggles show/hide text based on the state boolean `showCustomerProfile`
  const handleButtonClick = iD => {
    if (guestId === "" || guestId !== iD) {
      setGuestId(iD);
      setProfileButtonText(true);
      setHighlight([]);
    } else {
      setGuestId("");
      setProfileButtonText(false);
    }
  };

  // Render table.
  return (
    <>
      <div>
        <table className="table Search-table table-responsive">
          <ResultsTableHeading />

          <tbody>
            {props.results.map((guest, index) => (
              <tr
                className={`text-center SearchResults-tr ${
                  highlight.includes(index)
                    ? "bg-success text-light rounded"
                    : " "
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
                    className="btn btn-primary SearchResults-profile-button"
                    onClick={() => handleButtonClick(guest.id)}
                  >
                    {showCustomerProfile && guestId === index + 1
                      ? "Hide"
                      : "Show"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <CustomerProfile id={guestId} data={props} />
      </div>
    </>
  );
};

export default SearchResults;
