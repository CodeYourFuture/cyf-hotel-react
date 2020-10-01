import moment from "moment";
import React from "react";

const SearchResults = ({ results }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">nights staying</th>
        </tr>
      </thead>
      <tbody>
        {results.map(item => (
          <tr key={item.id}>
            <td> {item.id}</td>
            <td> {item.title}</td>
            <td> {item.firstName}</td>
            <td> {item.surname}</td>
            <td> {item.email}</td>
            <td> {item.roomId}</td>
            <td> {item.checkInDate}</td>
            <td> {item.checkOutDate}</td>
            <td>
              {moment(item.checkOutDate).diff(moment(item.checkInDate), "days")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
