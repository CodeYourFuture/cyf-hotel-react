import React from "react";
import Moment from "react-moment";

// function numOfNights(start, end) {
//   const day1 = moment(start);
//   const day2 = moment(end);
//   const result = day2.diff(day1, "days");
//   return result;
// }

const SearchResults = props => {
  return (
    <div>
      <table className="table table-striped">
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
            <th scope="col">Number of Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(data => (
            <tr>
              <th scope="row">{data.id}</th>
              <td>{data.title}</td>
              <td>{data.firstName}</td>
              <td>{data.surname}</td>
              <td>{data.email}</td>
              <td>{data.roomId}</td>
              <td>
                <Moment format="DD-MM-YYYY">{data.checkInDate}</Moment>
              </td>
              <td>
                <Moment format="DD-MM-YYYY">{data.checkOutDate}</Moment>
              </td>
              <td>
                <Moment diff={data.checkInDate} unit="days">
                  {data.checkOutDate}
                </Moment>
              </td>

              {/* <td>{numOfNights(data.checkInDate, data.checkOutDate)}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
