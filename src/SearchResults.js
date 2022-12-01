//import moment from "moment";
import React, { useState } from "react";
import TableRow from "./TableRow";

const SearchResults = ({ results, buttonClicked }) => {
  const [isClicked, setIsClicked] = useState();
  const setIsClickedRow = id => {
    setIsClicked(id);
  };
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>title</th>
          <th>Firstname</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check in</th>
          <th>Check out</th>
          <th>Staying nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map(record => {
          return (
            <TableRow
              record={record}
              isClicked={isClicked === record.id}
              onClick={() => {
                setIsClickedRow(record.id);
              }}
              buttonClicked={buttonClicked}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
