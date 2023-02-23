import React from "react";
import Moment from "react-moment";

function SearchResults(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Number</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">E-mail</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check out Date</th>
          <th scope="col">Number Of Days</th>
        </tr>
      </thead>
      {props.results.map((item, i) => {
        return (
          <tbody key={i}>
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.firstName}</td>
              <td>{item.surname}</td>
              <td>{item.email}</td>
              <td>{item.roomId}</td>
              <td>
                <Moment format="DD-MM-YYYY">{item.checkInDate}</Moment>
              </td>
              <td>
                <Moment format="DD-MM-YYYY">{item.checkOutDate}</Moment>
              </td>
              <td>
                <Moment diff={item.checkInDate} unit="days">
                  {item.checkOutDate}
                </Moment>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

export default SearchResults;
