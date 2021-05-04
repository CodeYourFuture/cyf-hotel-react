import React, { useState } from "react";
import BookingRow from "./BookingRow.js";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [selectedId, setSelectedId] = useState("");
  const handleClickButton = id => {
    setSelectedId(id);
  };
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th>title</th>
            <th>first name</th>
            <th>surname</th>
            <th>email</th>
            <th>room id</th>
            <th>check in date</th>
            <th>check out date</th>
            <th>nights</th>
            <th> Show profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((booking, index) => (
            <BookingRow
              index={index}
              info={booking}
              clicked={handleClickButton}
            />
          ))}
        </tbody>
      </table>
      <CustomerProfile id={selectedId} />
    </div>
  );
};

export default SearchResults;
