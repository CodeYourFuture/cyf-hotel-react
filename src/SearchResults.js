import moment from "moment";
import React from "react";

const SearchResults = props => {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.guests.map(guest => (
            <tr>
              <th scope="row">{guest.id}</th>
              <td>{guest.title}</td>
              <td>{guest.firstName}</td>
              <td>{guest.surname}</td>
              <td>{guest.email}</td>
              <td>{guest.roomId}</td>
              <td>{guest.checkInDate}</td>
              <td>{guest.checkOutDate}</td>
              <td>
                {moment(guest.checkOutDate).diff(
                  moment(guest.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default SearchResults;
