import React from "react";
import { numberOfNight } from "./Nights";

const SearchResults = ({ bookings }) => {
  return bookings.map((result) => {
    return (
      <tbody key={result.id}>
        <tr>
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
      </tbody>
    );
  });
};

export default SearchResults;
