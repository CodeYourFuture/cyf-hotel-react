import React, { useState } from "react";
import Row from "./Row";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [selectedId, setSelectedId] = useState(null);

  const setSelected = e => {
    setSelectedId(e);
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>

        {props.results.map((booking, index) => {
          return (
            <Row setSelected={setSelected} booking={booking} key={index} />
          );
        })}
      </table>

      {selectedId && <CustomerProfile id={selectedId} />}
    </div>
  );
};

export default SearchResults;
