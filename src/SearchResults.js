import React from "react";
import moment from "moment";

const SearchResult = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Email</th>
          <th scope="col" />
          <th scope="col">Room id</th>
          <th scope="col">Check-in date</th>
          <th scope="col">Check-out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((data, index) => {
          let a = moment(data.checkInDate);
          let b = moment(data.checkOutDate);
          let numOfNights = b.diff(a, "days");
          return (
            <tr>
              <th scope="row" key={index}>
                {data.title}
              </th>
              <td key={index}>{data.firstName}</td>
              <td key={index}>{data.surname}</td>
              <td key={index}>{data.email}</td>
              <td />
              <td key={index}>{data.roomId}</td>
              <td key={index}>{data.checkInDate}</td>
              <td key={index}>{data.checkOutDate}</td>
              <td key={index}>{numOfNights}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResult;
