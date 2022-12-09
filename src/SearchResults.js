import React, { useState } from "react";
import Moment from "moment";

function SearchResults(props) {
  // console.log(props);
  const [colour, setColor] = useState(true);
  function handleClick() {
    setColor(oldColour => !oldColour);
  }
  return (
    <div class="table-responsive">
      <table class="table table-bordered align-top">
        <thead class="table-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">SurName</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col"> Number of Nights </th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((profile, index) => {
            return (
              <tr
                key={index}
                onClick={handleClick}
                className={`${colour === true ? "row-bg" : "row-bg2"}`}
              >
                <td> {profile.id}</td>
                <td> {profile.title}</td>
                <td> {profile.firstName}</td>
                <td> {profile.surname}</td>
                <td> {profile.email}</td>
                <td> {profile.roomId}</td>
                <td> {profile.checkInDate}</td>
                <td> {profile.checkOutDate}</td>
                <td>
                  {" "}
                  {Math.abs(
                    Moment(profile.checkOutDate).diff(
                      Moment(profile.checkInDate),
                      "days"
                    )
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
