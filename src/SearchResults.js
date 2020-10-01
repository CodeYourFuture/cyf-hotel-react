import React, { useState } from "react";
import moment from "moment";

const SearchResults = ({ searchResults }) => {
  const [selected, setSeleted] = useState("");
  const selectLine = () => {
    setSeleted(selected ? "" : "selected");
  };

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
          <th scope="col">Check out date</th>
          <th scope="col">Total Nights</th>
        </tr>
      </thead>
      <tbody>
        {searchResults.map(
          ({
            id,
            title,
            firstName,
            surname,
            email,
            roomId,
            checkInDate,
            checkOutDate
          }) => (
            //<tr onClick ={selectLine} style = {{backgroundColor: selected}}>
            <tr onClick={selectLine} className={selected}>
              <th scope="row">{id}</th>
              <td>{title}</td>
              <td>{firstName}</td>
              <td>{surname}</td>
              <td>{email}</td>
              <td>{roomId}</td>
              <td>{checkInDate}</td>
              <td>{checkOutDate}</td>
              <td>{moment(checkOutDate).diff(moment(checkInDate), "days")}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};
export default SearchResults;
