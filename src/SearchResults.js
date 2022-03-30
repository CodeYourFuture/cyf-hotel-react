import React from "react";
import moment from "moment";

const SearchResult = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((item, key) => (
          <tr key={key}>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td>{item.firstName}</td>
            <td>{item.surname}</td>
            <td>{item.email}</td>
            <td>{item.roomId}</td>
            <td>{item.checkInDate}</td>
            <td>{item.checkOutDate}</td>
            <td>
              {moment(item.checkOutDate).diff(moment(item.checkInDate), "days")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResult;
