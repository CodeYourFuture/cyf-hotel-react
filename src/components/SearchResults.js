/*
To do 

We could continue from task 22 - 23 to implement the search function. https://github.com/CodeYourFuture/cyf-hotel-react#stretch-goals

It would be good to have a heads-up on how to highlight table rows for task 15; I found this reference code, useful from line 35
https://codesandbox.io/s/react-data-table-row-select-color-example-forked-w4zou6?file=/src/index.js:0-144

*/

// check the shape of the data against the fakedata

import React from "react";
import { useState } from "react";
import CustomerProfile from "./CustomerProfile";

const SearchResults = (props) => {
  const [selectedRowColor, setSelectedRowColor] = useState([]);
  const [profileId, setProfileId] = useState(0);

  //if profile ID is = to num, then render nothing

  // highlight the table
  const HighLight = (id) => {
    let selectedRow = [...selectedRowColor];

    if (selectedRow.includes(id)) {
      const index = selectedRow.indexOf(id);
      selectedRow.splice(index, 1);
      setSelectedRowColor(selectedRow);
    } else {
      selectedRow.push(id);
      setSelectedRowColor(selectedRow);
    }
  };

  return (
    <div>
      <table className="Table ">
        <thead className="Table-header">
          {/* setting up the table */}
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Family Name</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Number Of Nights</th>
            <th scope="col">Customer Profile</th>
          </tr>
        </thead>

        <tbody>
          {props.results.map((result) => {
            return (
              <tr
                key={result.id}
                onClick={(event) => {
                  HighLight(result.id);
                }}
                className={
                  selectedRowColor.includes(result.id) ? "HighlightRow" : ""
                }
              >
                <td>{result.id}</td>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>
                  {findNumberOfDaysBooked(
                    result.checkInDate,
                    result.checkOutDate
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={(event) => {
                      event.stopPropagation();
                      setProfileId(result.id);
                    }}
                  >
                    Show profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* if profile ID is = to null, then render nothing */}
      {profileId && <CustomerProfile id={profileId} />}
    </div>
  );
};

// Number of nights booked
function findNumberOfDaysBooked(checkInDate, checkOutDate) {
  const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);

  const daysStayed = Math.round(Math.abs((checkIn - checkOut) / oneDay));
  return daysStayed;
}
export default SearchResults;
