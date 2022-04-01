import React, { useState } from "react";
const moment = require("moment");

const headings = [
  "id",
  "title",
  "firstName",
  "surname",
  "email",
  "roomId",
  "checkInDate",
  "checkOutDate",
  "Duration"
];

function SearchResults(props) {
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    console.log("clicked");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }
  return (
    <table className="table">
      <thead>
        <tr>
          {headings.map(heading => {
            return (
              <th>
                {/* scope="col" */}
                {heading}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {props.bookings.map((booking, index) => {
          return (
            <tr
              style={{ backgroundColor: isMouseOver ? "lightgrey" : "white" }}
              onClick={handleClick}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <td>{booking.id}</td>
              {headings.map(heading => {
                if (heading === "id") {
                  return null;
                } else if (heading === "Duration") {
                  {
                    const checkIn = moment(booking.checkInDate);
                    const checkOut = moment(booking.checkOutDate);
                    const difference = checkOut.diff(checkIn, "days");
                    return <td>{difference}</td>;
                  }
                } else {
                  return <td>{booking[heading]}</td>;
                }
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default SearchResults;
