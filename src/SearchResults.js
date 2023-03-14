import React, { useState, useEffect } from "react";
import CustomerProfile from "./CustomerProfile";
import SearchResult from "./SearchResult";

const SearchResults = ({ results }) => {
  const [userId, setUserId] = useState(null);
  const [userProfile, setUserProfile] = useState({});
  const [sortedResults, setSortedResults] = useState([
    results,
    {
      id: false,
      title: false,
      firstName: false,
      surname: false,
      email: false,
      roomId: false,
      checkInDate: false,
      checkOutDate: false
    }
  ]);

  useEffect(() => {
    setSortedResults([results, sortedResults[1]]);
  }, [results, sortedResults]);

  const handleProfile = e => {
    e.stopPropagation();
    setUserId(e.target.parentElement.parentElement.firstElementChild.innerText);
  };

  const toggleSort = colName => {
    if (sortedResults[1][colName]) {
      const newResults = [...sortedResults[0]].sort(
        (a, b) => a[colName] < b[colName]
      );
      setSortedResults([newResults, { ...sortedResults[1], [colName]: false }]);
    } else {
      const newResults = [...sortedResults[0]].sort(
        (a, b) => a[colName] > b[colName]
      );
      setSortedResults([newResults, { ...sortedResults[1], [colName]: true }]);
    }
  };

  useEffect(() => {
    if (userId !== null) {
      fetch(`https://cbaggini-hotel-server.glitch.me/bookings/${userId}`)
        .then(response => response.json())
        .then(data => setUserProfile(data));
    }
  }, [userId]);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" onClick={() => toggleSort("id")}>
              id
            </th>
            <th scope="col" onClick={() => toggleSort("title")}>
              Title
            </th>
            <th scope="col" onClick={() => toggleSort("firstName")}>
              First Name
            </th>
            <th scope="col" onClick={() => toggleSort("surname")}>
              Surname
            </th>
            <th scope="col" onClick={() => toggleSort("email")}>
              Email address
            </th>
            <th scope="col" onClick={() => toggleSort("roomId")}>
              Room #
            </th>
            <th scope="col" onClick={() => toggleSort("checkInDate")}>
              Check-in date
            </th>
            <th scope="col" onClick={() => toggleSort("checkOutDate")}>
              Check-out date
            </th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <tbody>
          {sortedResults[0].map(el => (
            <SearchResult {...el} key={el.id} handleProfile={handleProfile} />
          ))}
        </tbody>
      </table>
      {userId && <CustomerProfile id={userId} {...userProfile} />}
    </>
  );
};

export default SearchResults;
