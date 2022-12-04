import React from "react";
import moment from "moment";

function SearchResults(props) {
  console.log(props);

  return (
    <table class="table">
      <thead>
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
            <tr key={index}>
              <td> {profile.id}</td>
              <td> {profile.title}</td>
              <td> {profile.firstName}</td>
              <td> {profile.surname}</td>
              <td> {profile.roomId}</td>
              <td> {profile.email}</td>
              <td> {profile.checkInDate}</td>
              <td> {profile.checkOutDate}</td>
              <td>
                {" "}
                {Math.abs(
                  moment(profile.checkOutDate).diff(
                    moment(profile.checkInDate),
                    "days"
                  )
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;
