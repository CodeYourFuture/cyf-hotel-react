import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import TableRow from "./TableRow";

const SearchResults = ({ results }) => {
  const [id, setId] = useState("");
  const [isActive, setIsActive] = useState(false);

  function handlerProfile(id) {
    setIsActive(!isActive);
    setId(id);
  }
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id </th>
            <th scope="col">check in date</th>
            <th scope="col">check out data</th>
            <th scope="col">number of nights</th>
          </tr>
        </thead>

        <tbody className="result">
          {results.map((result, index) => {
            return (
              <TableRow
                result={result}
                key={index}
                handlerProfile={handlerProfile}
              />
            );
          })}
        </tbody>
      </table>
      {isActive && <CustomerProfile id={id} />}
    </div>
  );
};
export default SearchResults;
