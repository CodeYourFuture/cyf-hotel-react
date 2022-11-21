import React from "react";
import "./Heading.css";
import moment from "moment";
import BookingRow from "./BookingRow";

const SearchResults = props => {
  const noOfNights = (checkInDate, checkOutDate) => {
    const m_checkInDate = moment(checkInDate);
    const m_checkOutDate = moment(checkOutDate);
    const days = m_checkOutDate.diff(m_checkInDate, "days");
    return days;
  };

  return (
    <>
      <div className="">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">First Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Email</th>
              <th scope="col">Room ID</th>
              <th scope="col">Check In Date</th>
              <th scope="col">Check Out Date</th>
              <th scope="col">Number OF Nights</th>
            </tr>
          </thead>
          <tbody>
            {props.results.map((result, index) => (
              <BookingRow key={index} result={result} />
              // <tr>
              //   <td>{result.id}</td>
              //   <td>{result.title}</td>
              //   <td>{result.firstName}</td>
              //   <td>{result.surname}</td>
              //   <td>{result.email}</td>
              //   <td>{result.roomId}</td>
              //   <td>{result.checkInDate}</td>
              //   <td>{result.checkOutDate}</td>
              //       <td>
              //   {moment(result.checkOutDate).diff(
              //     moment(result.checkInDate),
              //     "days"
              //   )}
              // </td>
              //   {/* <td>{noOfNights(result.checkInDate, result.checkOutDate)}</td> */}
              // </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SearchResults;
