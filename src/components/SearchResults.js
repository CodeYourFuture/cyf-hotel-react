import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile ";
import SearchResult from "./SearchResult";

const SearchResults = props => {
  const [id, setId] = useState(null);
  return (
    <>
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
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((booking, index) => {
            return <SearchResult booking={booking} key={index} setId={setId} />;
          })}
        </tbody>
      </table>
      {id ? <CustomerProfile id={id} /> : null}
    </>
  );
};

export default SearchResults;
