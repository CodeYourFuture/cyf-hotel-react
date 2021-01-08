import React, { useState, useEffect } from "react";
import CustomerProfile from "./CustomerProfile";
import SearchResult from "./SearchResult";

const SearchResults = props => {
  const [userId, setUserId] = useState(null);
  const [userProfile, setUserProfile] = useState({});

  const handleProfile = e => {
    setUserId(e.target.parentElement.parentElement.firstElementChild.innerText);
  };

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${userId}`)
      .then(response => response.json())
      .then(data => setUserProfile(data));
  }, [userId]);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email address</th>
            <th scope="col">Room #</th>
            <th scope="col">Check-in date</th>
            <th scope="col">Check-out date</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(el => (
            <SearchResult {...el} key={el.id} handleProfile={handleProfile} />
          ))}
        </tbody>
      </table>
      {userId && <CustomerProfile id={userId} {...userProfile} />}
    </>
  );
};

export default SearchResults;
