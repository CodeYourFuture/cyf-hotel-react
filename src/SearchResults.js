// import moment from "moment";
import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import TableExtracted from "./TableExtracted";

const SearchResults = ({ results }) => {
  const [customerId, setCustomerId] = useState("");
  // const changeCustomerId = (id) => {
  // setCustomerId(id)
  // }

  return (
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
          <th scope="col">nights staying</th>
        </tr>
      </thead>
      <tbody>
        {results.map(item => (
          <TableExtracted
            item={item}
            key={item.id}
            changeCustomerId={setCustomerId}
          />
        ))}
      </tbody>
      <CustomerProfile customerId={customerId} />
    </table>
  );
};

export default SearchResults;
