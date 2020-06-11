import React, { useState } from "react";
import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [profile, setProfile] = useState({});

  const handleClick = value => {
    fetch(`https://cyf-react.glitch.me/customers/${value}`)
      .then(res => res.json())
      .then(data => setProfile(data));
  };
  console.log(profile.id);
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
            <th scope="col">Profiles</th>
          </tr>
        </thead>

        {props.results.map((booking, index) => (
          <TableRow
            value={booking.id}
            key={index}
            booking={booking}
            handleClick={e => handleClick(e.target.value)}
          />
        ))}
      </table>
      {profile.id !== undefined && <CustomerProfile customer={profile} />}
    </div>
  );
};

export default SearchResults;
