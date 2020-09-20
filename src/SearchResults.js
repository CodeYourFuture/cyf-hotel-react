import React from "react";
import moment from "moment";

const SearchResults = ({ data }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Total number of nights</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => {
            const checkIn = moment(item.checkInDate);
            const checkOut = moment(item.checkOutDate);
            const numOfNights = checkOut.diff(checkIn, "days");
            return (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.firstName}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>{item.roomId}</td>
                <td>{item.checkInDate}</td>
                <td>{item.checkOutDate}</td>
                <td>{numOfNights}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
