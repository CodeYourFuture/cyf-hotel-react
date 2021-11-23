import React, { useState } from "react";

// I need to unpack dateDiff from date.js cause I havent export it as default
import { dateDiff } from "./utils/date";

function SearchResult(props) {
  const { results } = props;
  const [selectedRows, setSelectedRows] = useState([]);
  const [headerHighlited, setHeaderHighlited] = useState(false);

  const handleRowClick = id => {
    let clonedSelectedRows = [...selectedRows];
    if (clonedSelectedRows.includes(id)) {
      const index = clonedSelectedRows.indexOf(id);
      clonedSelectedRows.splice(index, 1);
      setSelectedRows(clonedSelectedRows);
    } else {
      clonedSelectedRows.push(id);
      setSelectedRows(clonedSelectedRows);
    }
  };
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr
            onClick={() => setHeaderHighlited(!headerHighlited)}
            className={headerHighlited ? "blueTextColor" : ""}
          >
            <th>id</th>
            <th>title</th>
            <th>firstName</th>
            <th>surname</th>
            <th>email</th>
            <th>roomId</th>
            <th>checkInDate</th>
            <th>checkOutDate</th>
            <th>numberOfNights</th>
          </tr>
        </thead>
        <tbody>
          {results.map(row => {
            return (
              <tr
                key={row.id}
                onClick={e => {
                  handleRowClick(row.id);
                }}
                className={selectedRows.includes(row.id) ? "highlighted" : ""}
              >
                <td>{row.id}</td>
                <td>{row.title}</td>
                <td>{row.firstName}</td>
                <td>{row.surname}</td>
                <td>{row.email}</td>
                <td>{row.roomId}</td>
                <td>{row.checkInDate}</td>
                <td>{row.checkOutDate}</td>
                <td>{dateDiff(row.checkInDate, row.checkOutDate)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default SearchResult;
