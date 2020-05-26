import React from "react";
import moment from "moment";

const SearchResults = props => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check out Date</th>
          <th scope="col">Number Of Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(data => {
          const checkIn = moment(data.checkOutDate);
          const checkOut = moment(data.checkInDate);
          return (
            <tr>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.firstName}</td>
              <td>{data.surname}</td>
              <td>{data.email}</td>
              <td>{data.roomId}</td>
              <td>{data.checkInDate}</td>
              <td>{data.checkOutDate}</td>
              <td>{checkIn.diff(checkOut, "days")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

//   var a = moment(x.checkInDate);
//   var b = moment(x.checkOutDate);
//   b.diff(a, "days"); // 1

export default SearchResults;
