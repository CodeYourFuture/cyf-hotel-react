import React from "react";
import moment from "moment";
const SearchResults = props => {
  /*Table added added to website using JSX */
  // 1
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check In</th>
            <th scope="col">Check Out</th>
            <th scope="col">Nights In</th>
          </tr>
        </thead>
        <tbody>
          {props.guestList.map((element, index) => {
            const a = moment(element.checkOutDate);
            const b = moment(element.checkInDate);
            const differenceOfDays = a.diff(b, "days");
            return (
              <tr key={index}>
                <th scope="row">{element.id}</th>
                <td>{element.title}</td>
                <td>{element.firstName}</td>
                <td>{element.surname}</td>
                <td>{element.email}</td>
                <td>{element.roomId}</td>
                <td>{element.checkInDate}</td>
                <td>{element.checkOutDate}</td>
                <td>{differenceOfDays}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
