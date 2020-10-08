import React, { useState } from "react";
import HeadingRow from "./HeadingRow";
import BodyRow from "./BodyRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results, deleteBooking }) => {
  const [customerSelected, setCustomerSelected] = useState(null);
  const [isSorted, setIsSorted] = useState({});
  console.log(customerSelected);

  const sortBookings = e => {
    const column = e.target.title;
    let sortBookings;
    if (!isSorted[column]) {
      sortBookings = sortByColumnName(column);
      setIsSorted({ ...isSorted, [column]: true });
    } else {
      sortBookings = results.reverse();
      setIsSorted({ ...isSorted, [column]: false });
    }
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
      <table className="table">
        <thead>
          <HeadingRow sortBookings={sortBookings} />
        </thead>
        <tbody>
          {results.map(field => {
            return (
              <BodyRow
                field={field}
                setClickedBtn={setCustomerSelected}
                id={field.id}
                deleteBooking={deleteBooking}
              />
            );
          })}
        </tbody>
      </table>
      {customerSelected && <CustomerProfile id={customerSelected} />}
    </div>
  );
};
export default SearchResults;
