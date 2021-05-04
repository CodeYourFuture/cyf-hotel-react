import React, { useState } from "react";
import TableRows from "./TableRows";
import CustomerProfile from "./CustomerProfile";

import "./App.css";

const SearchResult = props => {
  const [active, setActive] = useState(false);
  const [id, setId] = useState(0);

  const handleProfileClick = id => {
    setActive(!active);
    setId(id);
  };

  return (
    <div className="table-responsive">
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
            <th scope="col">Profiles</th>
          </tr>
        </thead>
        <tbody className="result">
          {props.results.map((result, index) => {
            return (
              <TableRows
                user={result}
                key={index}
                handleProfileClick={handleProfileClick}
              />
            );
          })}
        </tbody>
      </table>

      {active ? <CustomerProfile id={id} /> : ""}
    </div>
  );
};

export default SearchResult;
