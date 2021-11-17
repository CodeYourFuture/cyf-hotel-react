import React from "react";
import moment from "moment";

const SearchResults = props => {
  return (
    <div className="table-wrapper">
      <table className="table table-hover table-striped table-bordered my-table ">
        <caption className="table-caption">List of Bookings</caption>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Checked In</th>
            <th scope="col">Checked Out</th>
            <th scope="col">Nights stayed</th>
          </tr>
        </thead>

        <tbody>
          {props.bookingData.map(person => {
            let checkIn = moment(person.checkInDate);
            let checkOut = moment(person.checkOutDate);
            return (
              <tr key={person.id}>
                <th>{person.id}</th>
                <td>{person.title}</td>
                <td>{person.firstName}</td>
                <td>{person.surname}</td>
                <td>{person.email}</td>
                <td>{person.roomId}</td>
                <td>{person.checkInDate}</td>
                <td>{person.checkOutDate}</td>
                <td>{checkOut.diff(checkIn, "days")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
