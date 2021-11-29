import React, { useState } from "react";
import TableHeader from "./TableHeader";
import moment from "moment";

const SearchResults = ({ results }) => {
  const [rowsSelected, setRowsSelected] = useState(false);
  function rowsSelector() {
    setRowsSelected(!rowsSelected);
  }
  return (
    <div className="search-results">
      <table className="table table-striped">
        <TableHeader />
        <tbody>
          {results.map(entry => {
            return (
              <tr
                key={entry.id}
                onClick={e => {
                  rowsSelector();
                }}
                className={rowsSelected ? "highlight" : ""}
              >
                <td>{entry.id}</td>
                <td>{entry.title}</td>
                <td>{entry.firstName}</td>
                <td>{entry.surname}</td>
                <td>{entry.email}</td>
                <td>{entry.roomId}</td>
                <td>{entry.checkInDate}</td>
                <td>{entry.checkOutDate}</td>
                <td>
                  {moment(entry.checkOutDate, "YYYY/MM/DD").diff(
                    moment(entry.checkInDate, "YYYY/MM/DD"),
                    "days"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
