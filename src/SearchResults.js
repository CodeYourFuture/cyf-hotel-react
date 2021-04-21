import moment from "moment";
import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Rood Id</th>
            <th scope="col">Check-In Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Total Nights</th>
          </tr>
        </thead>
        <tbody>
          {results.map(customer => {
            return (
              <tr>
                <th scope="row">{customer.id}</th>
                <td>{customer.title}</td>
                <td>{customer.firstName}</td>
                <td>{customer.surname}</td>
                <td>{customer.email}</td>
                <td>{customer.roomId}</td>
                <td>{customer.checkInDate}</td>
                <td>{customer.checkOutDate}</td>
                <td>
                  {moment(customer.checkOutDate).diff(
                    moment(customer.checkInDate),
                    "days"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
