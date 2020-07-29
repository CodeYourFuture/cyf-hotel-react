import React, { useState, useEffect } from "react";
import TableRow from "./TableRow.js";
import CustomerProfile from "./CustomerProfile.js";

function SearchResults(props) {
  const [profileId, setProfileId] = useState(0);
  const [rows, setRows] = useState(props.results);

  function getProfileId(id) {
    setProfileId(id);
  }

  useEffect(() => {
    if (props.newBookingInfo !== undefined) {
      let rowsData = props.results.concat(props.newBookingInfo);
      setRows(rowsData);
    } else {
      setRows(props.results);
    }
  }, [props.newBookingInfo]);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id </th>
            <th scope="col">Title </th>
            <th scope="col">First Name </th>
            <th scope="col">Surname </th>
            <th scope="col">Email </th>
            <th scope="col">Room id </th>
            <th scope="col">Check In Date </th>
            <th scope="col">Check Out Date </th>
            <th scope="col">Number of Nights</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => {
            return (
              <>
                <TableRow
                  key={row.id}
                  result={row}
                  getProfileId={getProfileId}
                />
              </>
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={profileId} />
    </>
  );
}

export default SearchResults;
