import React from "react";
import moment from "moment";

const SearchResults = props => {
  console.log(props);
  return (
    <div className="Search-results">
      <div className="container">
        <div className="table-responsive mb-3 mt-3">
          <table
            className="table table-bordered table-hover"
            width="100%"
            id="bookingsTable"
          >
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Room Id</th>
                <th scope="col">Check-in Date</th>
                <th scope="col">Check-out Date</th>
                <th scope="col">Staying Night</th>
              </tr>
            </thead>
            <tbody>
              {props.results.map(
                ({
                  firstName,
                  surname,
                  id,
                  title,
                  email,
                  checkInDate,
                  checkOutDate,
                  roomId
                }) => {
                  const checkOut = moment(checkOutDate);
                  const checkIn = moment(checkInDate);
                  return (
                    <tr key={id}>
                      <th scope="row">{id}</th>
                      <td>{title}</td>
                      <td>{firstName}</td>
                      <td>{surname}</td>
                      <td>{email}</td>
                      <td>{roomId}</td>
                      <td>{checkInDate}</td>
                      <td>{checkOutDate}</td>
                      <td>{checkOut.diff(checkIn, "days")}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
