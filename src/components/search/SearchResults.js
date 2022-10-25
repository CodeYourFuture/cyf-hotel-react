import React, { useState } from "react";
import TableRow from "../TableRow";
import CustomerProfile from "../customerProfile/CustomerProfile";

const headings = [
  "Id",
  "Title",
  "FirstName",
  "Surname",
  "Email",
  "RoomId",
  "CheckInDate",
  "CheckOutDate",
  "Duration",
  "Profile"
];

function SearchResults(props) {
  const [id, setId] = useState(null);

  function handleButtonClick(clickedId) {
    setId(clickedId);
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {headings.map((heading, index) => {
              return (
                <th className="table-active table-header" key={index}>
                  {heading}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.bookings.map(booking => {
            return (
              <TableRow
                key={booking.id}
                data={booking}
                handleClick={handleButtonClick}
              />
            );
          })}
        </tbody>
      </table>
      {id && <CustomerProfile id={id} />}
      <hr />
    </>
  );
}
export default SearchResults;
