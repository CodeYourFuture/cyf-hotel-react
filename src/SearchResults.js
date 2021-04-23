import moment from "moment";
import React from "react";

const SearchResults = props => {
  return (
    <div>
      <table className="table table-striped table-bordered table-hover text-center">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Staying length</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((info, index) => {
            let checkInDate = moment(info.checkInDate);
            let checkOutDate = moment(info.checkOutDate);
            let lengthOfStay = checkOutDate.diff(checkInDate, "days");

            return (
              <tr key={index}>
                <td>{info.title}</td>
                <td>{info.firstName}</td>
                <td>{info.surname}</td>
                <td>{info.email}</td>
                <td>{info.roomId}</td>
                <td>{info.checkInDate}</td>
                <td>{info.checkOutDate}</td>
                <td>{lengthOfStay} Night(s)</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
