import React, { useState } from "react";
import TableInfo from "./TableInfo.js";
import TableRow from "./TableRow.js";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results, setBookings }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [isSorted, setIsSorted] = useState({});

  const sortBookings = event => {
    const column = event.target.title;
    let sortedBookings;

    if (!isSorted[column]) {
      sortedBookings = sortByColumnName(column);
      setIsSorted({ ...isSorted, [column]: true });
    } else {
      sortedBookings = results.reverse();
      setIsSorted({ ...isSorted, [column]: false });
    }
    setBookings([...sortedBookings]);
  };
  const sortByColumnName = column => {
    return results.sort((a, b) => {
      if (typeof a[column] === "number") {
        return a[column] - b[column];
      } else {
        return a[column].localeCompare(b[column]);
      }
    });
  };

  return (
    <div>
      <table className="table table-striped">
        <TableInfo sortBookings={sortBookings} />
        <tbody>
          {results.map(result => {
            result.numOfNights = moment(result.checkOutDate).diff(
              result.checkInDate,
              "days"
            );
            return (
              <TableRow
                key={result.id}
                content={result}
                setCustomerId={setSelectedId}
              />
            );
          })}
        </tbody>
      </table>
      {selectedId && <CustomerProfile customerId={selectedId} />}
    </div>
  );
};

export default SearchResults;
