import React from "react";
import Moment from "react-moment";

const SearchResults = props => {
  return (
    <div className="table-responsive-sm">
      <table className="table table-bordered">
        <thead className="table-primary fontColor">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Firstname</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Duration of stay </th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(result => {
            return (
              <tr>
                <th scope="row">{result.id}</th>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>
                  {/* {moment(result.checkOutDate, "DD/MM/YYYY").diff(
                  moment(result.checkInDate, "DD/MM/YYYY"),
                  "days"
                )} */}
                  <Moment diff={result.checkInDate} unit="days">
                    {result.checkOutDate}
                  </Moment>
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
