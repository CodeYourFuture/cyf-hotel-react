import React from "react";
import moment from "moment";

function SearchResults(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check In</th>
          <th scope="col">Check Out</th>
          <th scope="col">Nights Staying</th>
          <th scope="col">Select Booking</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(function(element, index) {
          const a = moment(element.checkInDate);
          const b = moment(element.checkOutDate);
          let hightLightBoolean = false;

          function BackgroundHighlight() {
            console.log(element);
            const bookingContainer = document.getElementsByClassName(
              "bookingContainer"
            );

            if (hightLightBoolean === false) {
              bookingContainer[element.id - 1].className =
                "bookingContainer highlight";
              hightLightBoolean = true;
            } else {
              bookingContainer[element.id - 1].className = "bookingContainer";
              hightLightBoolean = false;
            }

            console.log(bookingContainer[element.id - 1].className);
          }

          return (
            <tr className="bookingContainer">
              <th scope="row">{element.id}</th>
              <td>{element.title}</td>
              <td>{element.firstName}</td>
              <td>{element.surname}</td>
              <td>{element.email}</td>
              <td>{element.roomId}</td>
              <td>{element.checkInDate}</td>
              <td>{element.checkOutDate}</td>
              <td>{b.diff(a, "days")}</td>
              <td>
                <button
                  onClick={BackgroundHighlight}
                  className="btn btn-primary"
                >
                  Select
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;
