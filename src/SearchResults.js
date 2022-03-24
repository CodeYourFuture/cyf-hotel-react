import React from "react";
import moment from "moment";

const SearchResults = ({ list }) => {
  return (
    <table className="table table-sm">
      <thead className="table-header">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Sur Name</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>CheckIn Date</th>
          <th>CheckOut Date</th>
          <th>Number of Nights</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {list.map((obj, index) => {
          return (
            <tr key={index}>
              <td>{obj.id}</td>
              <td>{obj.title}</td>
              <td>{obj.firstName}</td>
              <td>{obj.surname}</td>
              <td>{obj.email}</td>
              <td>{obj.roomId}</td>
              <td>{obj.checkInDate}</td>
              <td>{obj.checkOutDate}</td>
              <td>
                {moment(obj.checkOutDate).diff(moment(obj.checkInDate), "day")}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
