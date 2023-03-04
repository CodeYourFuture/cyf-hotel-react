import React, { useState } from "react";
import { numberOfNight } from "./Nights";

const SearchResults = ({ results }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const handleRowClick = (id) => {
    if (id === selectedRow) {
      setSelectedRow(null);
    } else {
      setSelectedRow(id);
    }
  };

  return (
    <tbody>
      {results.map((result) => {
        // console.log(result.id);
        // console.log(selectedRow);

        return (
          <tr
            key={result.id}
            className={result.id === selectedRow ? "selected-colour" : ""}
            onClick={() => handleRowClick(result.id)}
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
              {numberOfNight({
                checkInDate: result.checkInDate,
                checkOutDate: result.checkOutDate,
              })}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default SearchResults;
