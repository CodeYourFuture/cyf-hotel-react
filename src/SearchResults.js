import moment from "moment";
import React from "react";
import Moment from "react-moment";
import Bookings from "./Bookings";

const SearchResults = prob => {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">id</th>
          <th>title</th>
          <th>first name</th>
          <th>surname</th>
          <th>email</th>
          <th>room id</th>
          <th>check in date</th>
          <th>check out date</th>
          <th>nights</th>
        </tr>
      </thead>
      <tbody>
        {prob.results.map((Bookings, index) => {
          let checkInDate = moment(Bookings.checkInDate);
          let checkOutDate = moment(Bookings.checkOutDate);
          return (
            <tr key={index}>
              <td>{Bookings.id}</td>
              <td>{Bookings.title}</td>
              <td>{Bookings.firstName}</td>
              <td>{Bookings.surname}</td>
              <td>{Bookings.email}</td>
              <td>{Bookings.roomId}</td>
              <td>{Bookings.checkInDate}</td>
              <td>{Bookings.checkOutDate}</td>
              <td>{checkOutDate.diff(checkInDate, "days")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
