import React from "react";

const SearchResults = props => {
  return (
    <div className="table-wrapper">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check-In Date</th>
            <th scope="col">Check-Out Date</th>
          </tr>
        </thead>
        <tbody>
          {props.reservations.map((reservation, ind) => {
            return (
              <tr key={ind}>
                <th scope="row">{reservation.id}</th>
                <td>{reservation.title}</td>
                <td>{reservation.firstName}</td>
                <td>{reservation.surname}</td>
                <td>{reservation.email}</td>
                <td>{reservation.roomId}</td>
                <td>{reservation.checkInDate}</td>
                <td>{reservation.checkOutDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
