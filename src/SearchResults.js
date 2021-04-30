import React, { useState } from "react";
import BookingDetails from "./BookingDetails.js";
import Highlight from "./Highlight.js";

const SearchResults = ({ results }) => {
  const [row, setRow] = useState({
    activeRow: null,
    results
  });

  function HandleClick(e, index) {
    let selectedRowClassList = e.target.parentElement.classList.value;
    if (selectedRowClassList.includes("highlight-row")) {
      setRow({ ...row, activeRow: null });
    } else {
      setRow({ ...row, activeRow: row.results[index] });
    }
  }

  return (
    <>
      <h1>Hello World</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check In</th>
            <th scope="col">Check Out</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>
          {row.results.map((info, index) => (
            <tr
              key={index}
              className={Highlight(index, row)}
              onClick={event => {
                HandleClick(event, index);
              }}
            >
              <BookingDetails info={info} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SearchResults;
