import React from "react";
import moment from "moment";

// let Bookingdata = [
//   {
//     id: "1",
//     title: "Mr",
//     firstname: "Person1",
//     surname: "Else1",
//     email: "person1@else.com",
//     roomid: "101",
//     checkindate: "21-11-2017",
//     checkoutdate: "28-11-2017",
//   },

//   {
//     id: "2",
//     title: "Mrs",
//     firstname: "Person2",
//     surname: "Else2",
//     email: "person2@else.com",
//     roomid: "102",
//     checkindate: "21-11-2018",
//     checkoutdate: "28-11-2018",
//   },
// ];

function SearchResults(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">No of nights</th>
          </tr>
        </thead>

        <tbody>
          {props.results.map((i, index) => {
            return (
              <tr key={index}>
                <th scope="row">{i.id}</th>
                <td>{i.title}</td>
                <td>{i.firstname}</td>
                <td>{i.surname}</td>
                <td>{i.email}</td>
                <td>{i.roomId}</td>
                <td>{i.checkInDate}</td>
                <td>{i.checkOutDate}</td>
                <td>{moment(i.checkOutDate).diff(i.checkInDate, "days")} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
