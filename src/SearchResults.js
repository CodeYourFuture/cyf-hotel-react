import React from "react";
import HeadTable from "./HeadTable";
import moment from "moment";

const SearchResults = ({ results }) => {
  return (
    <table class="table">
      <HeadTable />
      <tbody>
        {results.map(result => {
          return (
            <tr key={result.id}>
              <td>{result.id}</td>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>
                {moment(result.checkOutDate).diff(
                  moment(result.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default SearchResults;
