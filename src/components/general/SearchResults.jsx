import moment from "moment";
import React from "react";

const SearchResults = ({ result }) => {
  return (
    <table className="booking_table">
      <thead className="table_header">
        <tr>
          <td>id</td>
          <td>title</td>
          <td>first name</td>
          <td>surname</td>
          <td>email</td>
          <td>room id</td>
          <td>check in date</td>
          <td>check out date</td>
          <td>number of nights</td>
        </tr>
      </thead>
      <tbody className="table_body">
        {result.map((obj, index) => {
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
