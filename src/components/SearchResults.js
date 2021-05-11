import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import SearchResultRow from "./SearchResultRow";
import "./SearchResults.css";

function SearchResults(props) {
  const [showProfile, setShowProfile] = useState(-1);
  const [results, setResults] = useState(props.results);

  function handleShowProfile(id) {
    setShowProfile(id);
    console.log(id);
  }
  function handleSort(e) {
    e.preventDefault();
    const sortProperty = e.target.getAttribute("name");

    if (results) {
      let newResults = [...results];
      //TODO: sort for days
      newResults.sort(function(a, b) {
        var nameA = isNaN(a[sortProperty])
          ? a[sortProperty].toUpperCase()
          : a[sortProperty];
        var nameB = isNaN(b[sortProperty])
          ? b[sortProperty].toUpperCase()
          : b[sortProperty];
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      setResults(newResults);
    }
  }
  return (
    <div className="flexRow">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" name="title" onClick={handleSort}>
              Title
            </th>
            <th scope="col" name="firstName" onClick={handleSort}>
              First name
            </th>
            <th scope="col" name="surname" onClick={handleSort}>
              Surname
            </th>
            <th scope="col" name="email" onClick={handleSort}>
              Email
            </th>
            <th scope="col" name="roomId" onClick={handleSort}>
              Room id
            </th>
            <th scope="col" name="checkInDate" onClick={handleSort}>
              Check in date
            </th>
            <th scope="col" name="checkOutDate" onClick={handleSort}>
              Check out date
            </th>
            <th scope="col" name="days">
              Days
            </th>
            <th scope="col">Customer Profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map((booking, index) => (
            <SearchResultRow
              key={index}
              booking={booking}
              showProfile={handleShowProfile}
            />
          ))}
        </tbody>
      </table>
      <CustomerProfile id={showProfile} />
    </div>
  );
}

export default SearchResults;
