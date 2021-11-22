import React from "react";
import TableHeader from "./TableHeader";
import moment from "moment";

const SearchResults = props => {
  return (
    <div className="search-results">
      <table className="table table-striped">
        <TableHeader />
        <tbody>
          {props.results.map((entry, index) => {
            return (
              <tr key={index}>
                <td>{entry.title}</td>
                <td>{entry.firstName}</td>
                <td>{entry.surname}</td>
                <td>{entry.email}</td>
                <td>{entry.roomId}</td>
                <td>{entry.ID}</td>
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
