import React from "react";
import { useState } from "react";
import ResultRow from "./ResultRow";

const SearchResults = ({ results }) => {
  const [active, setActive] = useState();

  const setActiveRow = id => {
    setActive(id);
  };
  return (
    <table className="table">
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
            <ResultRow
              record={record}
              active={active === record.id}
              onClick={() => {
                setActiveRow(record.id);
              }}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
