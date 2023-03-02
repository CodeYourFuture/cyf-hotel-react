import React, { useState } from "react";
import Nights from "./Nights";

const SearchResults = ({ results }) => {
  const [selectedRow, setSelectedRow] = useState("");

  const handleRowClick = (id) => {
    if (id === selectedRow) {
      setSelectedRow("");
    } else {
      setSelectedRow(id);
    }
  };
  return (
    <tbody>
      {results.map((result) => {
        return (
          <tr
            key={result.id}
            className={result.id === selectedRow ? "selected-color" : ""}
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
              {Nights({
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
