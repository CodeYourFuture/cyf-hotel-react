import React, { useState } from "react";
import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const tableHeadings = [
    "Id",
    "Title",
    "First Name",
    "Surname",
    "Email",
    "Room Id",
    "Check-in Date",
    "Check-out date"
  ];
  const [id, setId] = useState(null);

  const getId = clickedId => {
    setId(clickedId);
  };

  return (
    <div>
      <table>
        <caption className="Caption">Hotel Bookings</caption>
        <thead>
          <tr>
            {tableHeadings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
            <th>Nights Number</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((booking, index) => {
            return <TableRow key={index} booking={booking} func={getId} />;
          })}
        </tbody>
      </table>
      {id == null ? "" : <CustomerProfile customerId={id} />}
    </div>
  );
};

export default SearchResults;
