import moment from "moment";
import React, { useState } from "react";

const headers = [
  "id",
  "title",
  "firstName",
  "surname",
  "email",
  "roomId",
  "checkInDate",
  "checkOutDate",
  "#Nights",
  "profile?"
];

function SearchResults(props) {
  const [id, setId] = useState(null);

  function handleButtonClick(clickedId) {
    setId(clickedId);
  }

  return (
    <div>
      <table className="styled-table">
        <thead>
          <tr>
            {headers.map(heading => {
              return <th scope="col">{heading} </th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.bookings.map(booking => {
            return (
              <OurCustomrow booking={booking} handleClick={handleButtonClick} />
            );
          })}
        </tbody>
      </table>
      {id && <CustomerProfile id={id} />}
    </div>
  );
}

function OurCustomrow({ booking, handleClick }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <tr
      onClick={() => {
        setIsClicked(!isClicked);
      }}
      className={isClicked ? "highlighttrue" : ""}
    >
      <th scope="row">{booking.id}</th>
      {headers.map(heading => {
        if (heading === "id") {
          return null;
        } else if (heading === "#Nights") {
          const inDate = moment(booking.checkOutDate);
          const outDate = moment(booking.checkInDate);
          return <td>{inDate.diff(outDate, "days")} </td>;
        } else if (heading === "profile?") {
          return (
            <button onClick={() => handleClick(booking.id)}>
              Show Profile
            </button>
          );
        } else {
          return <td>{booking[heading]}</td>;
        }
      })}
    </tr>
  );
}

function CustomerProfile(props) {
  return `Customer ${props.id} Profile`;
}

export default SearchResults;
