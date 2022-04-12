import React, { useState } from "react";
import SearchResultRows from "./SearchResultRows";
import CustomerProfile from "./CustomerProfile";

const headings = [
  "id",
  "title",
  "firstName",
  "surname",
  "email",
  "roomId",
  "checkInDate",
  "checkOutDate",
  "numberOfNights",
  "profile?"
];

function SearchResults(props) {
  const [id, setId] = useState(null);

  function handleButtonClick(clickedId) {
    setId(clickedId);
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            {headings.map(heading => {
              return <th scope="col">{heading}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.bookings.map(booking => {
            return (
              <SearchResultRows
                booking={booking}
                headings={headings}
                handleClick={handleButtonClick}
              />
            );
          })}
        </tbody>
      </table>
      {id && <CustomerProfile id={id} />}
    </div>
  );
}

export default SearchResults;
