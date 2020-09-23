import React from "react";
import fakeBookings from "/home/cyf/Desktop/react/cyf-hotel-react/src/data/fakeBookings.json";
import moment from "moment";
const cssStyleTr = {
  color: "rgb(0,0,0)",
  fontSize: "14px"
  // backgroundColor:'rgb(255,0,0)'
};

//{fakeBookings[1].id}
//alert(moment(moment(fakeBookings[0].check)).diff(moment(),'days))
function SearchResults() {
  return (
    <div>
      <table>
        <tr style={cssStyleTr}>
          <th style={{ width: "20px" }}>Title</th>
          <th style={{ width: "80px" }}>First Name</th>
          <th style={{ width: "80px" }}>SurNAme</th>
          <th style={{ width: "100px" }}>Email</th>
          <th style={{ width: "20px" }}>RoomID</th>
          <th style={{ width: "150px" }}>Check in Date</th>
          <th style={{ width: "150px" }}>Check out Date</th>
          <th style={{ width: "400px" }}>stay</th>
        </tr>
        {fakeBookings.map(function(obj) {
          return (
            <tr style={cssStyleTr}>
              <td>{obj.id}</td>
              <td>{obj.title}</td>
              <td>{obj.surname}</td>
              <td>{obj.email}</td>
              <td>{obj.roomId}</td>
              <td>{obj.checkInDate}</td>
              <td>{obj.checkOutDate}</td>
              <td>
                Mr {obj.firstName} has a booking for{" "}
                {moment(moment(obj.checkOutDate, "YYYY-MM-DD")).diff(
                  moment(obj.checkInDate, "YYYY-MM-DD"),
                  "days"
                )}{" "}
                nights
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default SearchResults;
