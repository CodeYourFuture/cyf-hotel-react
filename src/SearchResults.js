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
  "#Nights"
];

function SearchResults(props) {
  // const [highlight, setHighlight] = useState(false);

  return (
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
          return <OurCustomrow booking={booking} />;
        })}
      </tbody>
    </table>
  );
}

function OurCustomrow({ booking }) {
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
        } else {
          return <td>{booking[heading]}</td>;
        }
      })}
    </tr>
  );
}

export default SearchResults;
