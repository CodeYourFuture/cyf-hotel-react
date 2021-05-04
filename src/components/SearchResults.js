import React, { useState } from "react";
import TableRow from "./TableRow";
import AddBooking from "./AddBooking";
import TableHead from "./TableHead";

const SearchResults = ({ results, setBookings }) => {
  const [sorting, setSorting] = useState({ field: "id", order: 0 });

  // order: 0 is ascending, 1 is descending, 2 is not sorted

  const handleSort = field => {
    if (field === sorting.field) {
      setSorting({ field, order: (sorting.order + 1) % 3 });
    } else {
      setSorting({ field: field, order: 2 });
    }
    console.log(results);
  };

  const sortingFunction = (A, B) => {
    return sorting.order === 0
      ? A[sorting.field] > B[sorting.field]
        ? 1
        : -1
      : A[sorting.field] < B[sorting.field]
      ? 1
      : -1;
  };

  let sortedResults = results;

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" onClick={() => handleSort("id")}>
              id
            </th>
            <th scope="col" onClick={() => handleSort("title")}>
              title
            </th>
            <th scope="col" onClick={() => handleSort("firstName")}>
              First Name
            </th>
            <th scope="col" onClick={() => handleSort("surname")}>
              Surname
            </th>
            <th scope="col" onClick={() => handleSort("email")}>
              Email
            </th>
            <th scope="col" onClick={() => handleSort("roomId")}>
              Room id
            </th>
            <th scope="col" onClick={() => handleSort("checkInDate")}>
              Check In date
            </th>
            <th scope="col" onClick={() => handleSort("checkOutDate")}>
              Check Out date
            </th>
            <th scope="col">Number of nights</th>
            <th scope="col">Show Profile</th>
          </tr>
        </thead>
        <tbody>
          {sorting.order === 2
            ? results.map((bookingDetails, index) => (
                <TableRow result={bookingDetails} key={index} />
              ))
            : sortedResults
                .sort(sortingFunction)
                .map((bookingDetails, index) => (
                  <TableRow result={bookingDetails} key={index} />
                ))}
        </tbody>
      </table>
      <AddBooking results={results} setBookings={setBookings} />
    </>
  );
};

export default SearchResults;
