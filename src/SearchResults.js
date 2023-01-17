import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";
const SearchResults = props => {
  const [colour, setColour] = useState(false);
  const clickHandle = () => {
    setColour(oldColour => !oldColour);
  };
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check out D ate</th>
            <th scope="col">Nights</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((profile, index) => {
            const checkingDate = moment(profile.checkInDate);
            const checkOutDate = moment(profile.checkOutDate);
            console.log(checkingDate, checkOutDate);
            return (
              <tr
                key={index}
                onClick={clickHandle}
                style={{
                  background: colour ? "skyblue" : "none"
                }}
              >
                <th scope="row">{profile.id}</th>
                <td>{profile.title}</td>
                <td>{profile.firstName}</td>
                <td>{profile.surname}</td>
                <td>{profile.email}</td>
                <td>{profile.roomId}</td>
                <td>{profile.checkInDate}</td>
                <td>{profile.checkOutDate}</td>
                <td>{checkOutDate.diff(checkingDate, `days`)}</td>
                <td>
                  <button onclick={CustomerProfile}>Show Profile</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CustomerProfile CustomerProfile="ID" />
    </div>
  );
};
export default SearchResults;
