import React from "react";
import moment from "moment";

const SearchResults = ({ bookings }) => {
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">nights</th>
          </tr>
        </thead>
        <tbody className="bodyClass">
          {bookings.map((props, index) => {
            return (
              <tr key={index}>
                <td>{props.id}</td>
                <td>{props.title}</td>
                <td>{props.firstName}</td>
                <td>{props.surname}</td>
                <td>{props.email}</td>
                <td>{props.roomId}</td>
                <td>{props.checkInDate}</td>
                <td>{props.checkOutDate}</td>
                <td>
                  {moment(props.checkOutDate).diff(
                    moment(props.checkInDate),
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
//.
