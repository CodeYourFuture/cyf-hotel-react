import React from "react";
import Row from "./Row";

const SearchResults = props => {
  const rowData = props.results;

  return (
    <div className="tableBox">
      <table id="aTable">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check-in-date</th>
            <th scope="col">Check-out-date</th>
            <th scope="col">Number of Nights</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {rowData.map(element => {
            return <Row row={element} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
