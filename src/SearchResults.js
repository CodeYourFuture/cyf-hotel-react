import React from "react";
import moment from "moment";

const SearchResult = (props) => {
  const dataArray = props.data;
  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {dataArray.map((item) => (
          <tr>
            <th scope="row">{item.id}</th>
            <th scope="row">{item.title}</th>
            <th scope="row">{item.firstName}</th>
            <th scope="row">{item.surname}</th>
            <th scope="row">{item.email}</th>
            <th scope="row">{item.roomId}</th>
            <th scope="row">{item.checkInDate}</th>
            <th scope="row">{item.checkOutDate}</th>
            <th scope="row">
              {moment(item.checkOutDate).diff(item.checkInDate, "day")}
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResult;
