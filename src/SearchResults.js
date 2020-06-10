import React, { useState } from "react";
import TableRow from "./TableRow";
import CustomerProfile from "./Customer";

const SearchResults = props => {
  const [selectedId, setSelectedId] = useState();

  const setSelected = customerId => {
    setSelectedId(customerId);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((booking, index) => (
            <TableRow
              booking={booking}
              index={index}
              setSelected={setSelected}
            />
          ))}
        </tbody>
      </table>
      <CustomerProfile id={selectedId} />
    </div>
  );
};
export default SearchResults;
