import React from "react";
import moment from "moment";

const SearchResults = ({ results }) => {
  console.log(results);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      {results.map((element, index) => {
        const checkOut = moment(element.checkOutDate);
        const checkIn = moment(element.checkInDate);
        const difference = checkOut.diff(checkIn, "days");
        return (
          <tbody>
            <th scope="col">{element.id}</th>
            <td scope="col">{element.title}</td>
            <td scope="col">{element.firstName}</td>
            <td scope="col">{element.surname}</td>
            <td scope="col">{element.email}</td>
            <td scope="col">{element.roomId}</td>
            <td scope="col">{element.checkInDate}</td>
            <td scope="col">{element.checkOutDate}</td>
            <td scope="col">{difference}</td>
          </tbody>
        );
      })}
    </table>
  );
};

export default SearchResults;
