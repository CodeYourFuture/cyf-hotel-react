import React from "react";
import moment from "moment";

export const SearchResults = ({ results }) => {
  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">E-mail</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check out Date</th>
            <th scope="col">Number of Nights</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.title}</th>
              <th scope="row">{item.firstName}</th>
              <th scope="row">{item.surname}</th>
              <th scope="row">{item.email}</th>
              <th scope="row">{item.id}</th>
              <th scope="row">{item.checkInDate}</th>
              <th scope="row">{item.checkOutDate}</th>
              <th scope="row">
                {moment(item.checkOutDate).diff(
                  moment(item.checkInDate),
                  "days"
                )}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
