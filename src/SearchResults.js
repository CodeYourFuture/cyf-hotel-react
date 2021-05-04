import React from "react";
import TableRow from "./TableRow";

function SearchResults(props) {
  console.log(props);
  return (
    <table className="table table-bordered">
      <thead className="thead-dark">
        {/* <tr className={clickRow} onClick={RowClick}> */}
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check In Date</th>
          <th>Check Out Date</th>
          <th>Nights Stayed</th>
          <th>Profiles</th>
        </tr>
      </thead>
      {props.hotelBookings.map(person => {
        return <TableRow result={person} />;
      })}
    </table>
  );
}

export default SearchResults;
